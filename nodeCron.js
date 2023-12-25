// var CronJob = require('cron').CronJob;
var async = require('async');

var jobQueue = async.queue(function (task, callback) {
    console.log(task.name)
    return new Promise((resolve, reject) => {
        sql.query('SELECT id FROM queue_jobs WHERE method_name=? LIMIT 1', [task.name], function (error, queueList) {
            if (error) { 
                reject(error)
            }
            if (!queueList.length) {
                
                task(callback);
            }

        })
        
    })
}, 1);

var job = function (callback) {
    // console.log(callback)
    setTimeout(() => {
        callback();
    }, 5000);
}
jobQueue.push(job, function (error) {
    console.log('task finished')
});
// console.log(q.workersList())

// new CronJob('* * * * * *', function () {
//     console.log('JOB REQUIRED');
//     q.push(job);
// }, null, true, 'America/Los_Angeles');