// var log = require('single-line-log').stdout;
// for (let i = 0; i < 1000; i++) {
//     setTimeout(() => {
//         log(`hello-${i}`)
//     }, i);
// }

// var util = require('util');
// var x = 0;
// setInterval(function () {
//     process.stdout.write('hello: ' + x + '\r');  // needs return '/r'
//     // util.print('hello: ' + x + '\r');  // could use this too
//     x++;
// }, 1000);

process.stdin.resume();

process.on('SIGINT', () => {
    console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function handle(signal) {
    console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);