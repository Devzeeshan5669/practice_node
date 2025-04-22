const { MongoClient } = require('mongodb');
const { Client } = require('@elastic/elasticsearch');

async function main() {
    // MongoDB connection URL
    const mongoUrl = 'mongodb://localhost:27017';
    // MongoDB database and collection name
    const dbName = 'firbe_maps';
    const collectionName = 'places';

    // Elasticsearch connection configuration
    const esConfig = {
        node: 'http://localhost:9200',
        auth: {
            username: 'elastic',
            password: 'admin'
        }
    };

    // Create MongoDB client
    const mongoClient = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create Elasticsearch client
    const esClient = new Client(esConfig);

    try {
        // Connect to MongoDB
        await mongoClient.connect();
        console.log('Connected to MongoDB');

        // Connect to Elasticsearch
        await esClient.ping();
        console.log('Connected to Elasticsearch');

        // Specify batch size
        const batchSize = 1000;

        // Get MongoDB collection
        const collection = mongoClient.db(dbName).collection(collectionName);

        // Create Elasticsearch index if not exists
        await esClient.indices.create({
            index: 'places',
            body: {
                mappings: {
                    properties: {
                        // Define your Elasticsearch mapping here
                        // Example: fieldName: { type: 'text' }
                    }
                }
            }
        });

        // Count total documents in MongoDB collection
        const totalDocuments = await collection.countDocuments();

        // Calculate total batches
        const totalBatches = Math.ceil(totalDocuments / batchSize);

        console.log(`Total documents: ${totalDocuments}`);
        console.log(`Batch size: ${batchSize}`);
        console.log(`Total batches: ${totalBatches}`);

        // Process documents in batches
        for (let i = 0; i < totalBatches; i++) {
            // Skip documents in previous batches
            const skip = i * batchSize;
            // Get documents for current batch
            const documents = await collection.find().skip(skip).limit(batchSize).toArray();

            // Prepare bulk request for Elasticsearch
            const body = documents.flatMap(doc => [
                { index: { _index: 'your_index_name', _id: doc._id } },
                doc
            ]);

            // Execute bulk request
            const { body: bulkResponse } = await esClient.bulk({ refresh: true, body });

            if (bulkResponse.errors) {
                const erroredDocuments = [];
                // Collect errored documents
                bulkResponse.items.forEach((action, j) => {
                    const operation = Object.keys(action)[0];
                    if (action[operation].error) {
                        erroredDocuments.push({
                            status: action[operation].status,
                            error: action[operation].error,
                            operation: body[j * 2],
                            document: body[j * 2 + 1]
                        });
                    }
                });
                console.log('Errored documents:', erroredDocuments);
            }

            console.log(`Batch ${i + 1}/${totalBatches} processed successfully`);
        }

        console.log('Data indexing completed');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close connections
        await mongoClient.close();
        await esClient.close();
        console.log('Connections closed');
    }
}

main();
