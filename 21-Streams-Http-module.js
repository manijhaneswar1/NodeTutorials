const http=require('http');
const fs = require('fs');

const port =8080;
http.createServer((req,res)=>{
    const fileStream=fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error', (err)=>{
        console.log(err)
    })
})

.listen(port,()=>{
    console.log(`server running on port ${port}...`)
});
