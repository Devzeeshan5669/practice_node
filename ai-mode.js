const fs = require('fs')
const { pipeline } = require('stream')
// const fetch = require('node-fetch');

async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
        {
            headers: {
                Authorization: "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

async function storeImage() {
    const response = await query({ "inputs": "Astronaut riding a horse" });

    const filePath = './image.png'; // Specify your path and filename

    const buffer = Buffer.from(await response.arrayBuffer());

    // Write the buffer to a file
    fs.writeFile(filePath, buffer, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Image saved successfully!');
        }
    });
}

storeImage();