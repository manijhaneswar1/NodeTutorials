const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',
    {encoding:"utf8"},
    {highWaterMark:100}
);
stream.on('data',(chunk)=>{
    console.log(chunk);
})
stream.on('error',(err)=>{
    console.log(err)
})