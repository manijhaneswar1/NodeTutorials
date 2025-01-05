const fs=require('fs');
fs.readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=res;
    fs.readFile('./content/second.txt','utf8',(err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=res;
        fs.writeFile('./content/writeFileAsync.txt',
            `here is the result : ${first} and ${second}`,
            {flag : 'a'},
            (err,res)=>{
            if(err){
                console.log(err);
            }
            console.log(res);
            })
    })
})
