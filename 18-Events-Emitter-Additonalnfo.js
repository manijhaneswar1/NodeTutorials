const EventEmitter = require('events');
const customEvents= new EventEmitter();

// we can more than one event with one emit but event name should be same for all.
//and we are able to pass arguments to our callback function and can pass value in emit method as you see below code !
customEvents.on('response',(name,age)=>{
    console.log(`hey ! my name is  ${name} & I'm ${age} old.`);
})
customEvents.on('response',()=>{
    console.log(`Data Received `);
});
customEvents.on('response',()=>{
    console.log(`This is my Second data Received`);
})

customEvents.emit('response','Mani Jhaneswar',20);