const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page');
        return;
    }
    if(req.url === '/about'){
        //Blocking Code
       /* for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} - ${j}`);
            }
        }
        */
        res.end('About Page')
        return;
    }
    res.end('Error Page 404')
})
server.listen(5000,()=>{
    console.log("Server is running on port 5000...");
})
