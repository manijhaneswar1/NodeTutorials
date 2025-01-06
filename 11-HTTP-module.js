const http=require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the Home Page');
        return;
    }
    if(req.url === '/about'){
        res.end('Welcome to the about page');
        return;
    }

    res.end(`
    <h1>Oops!</h1>
    <p>this seems to we can't find page you are looking</p>
    <a href="/">back to Home page</a> <br>
    <a href="/about">back to About Page</a>
    `)
})

server.listen(5000,()=>{
    console.log(`Server is running on port http://127.0.0.1:5000`)
});
