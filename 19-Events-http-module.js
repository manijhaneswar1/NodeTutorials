const http=require('http');

//  const server = http.createServer((req,res)=>{
//    res.end('welcome!');
//     });


// Using Event Emiiter API
const server=http.createServer();
//emits event request
// subcribe to it / listen to it / respond to it
server.on('request',(res,req)=>{
    res.end(`welcome!`);
})

server.listen(5000,()=>{
    console.log("Server is running on port 5000.");
});