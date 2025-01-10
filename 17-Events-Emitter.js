const EventEmitter = require('events');

const customEvent = new EventEmitter();
customEvent.on('open',()=>{
    console.log(`Data Received`);
})
customEvent.emit('open');