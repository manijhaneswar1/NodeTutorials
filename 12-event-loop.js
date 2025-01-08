const http=require('http');

const server =http.createServer((req,res)=>{
    console.log('request EVENT');
    res.end('Hello World!');
})

server.listen(8080,()=>{
    console.log('server listening on 8080')
});


// Event Loop ensures that the main thread is never blocked, allowing
// node.js to handle a large number of concurrent operations efficiently.