const EventEmitter = require('events');

let eventEmitter = new EventEmitter();

eventEmitter.on('event', (data) => {
    console.log(`Event catched: ${data}`);
});


console.log(`give me data`);
process.stdin.on('data', function (data) {
    eventEmitter.emit('event', data);
});