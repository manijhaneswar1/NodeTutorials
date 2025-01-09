const {readFile} = require('fs');

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
const result=async ()=>{
    try{
        console.log(await getText('./content/first.txt'));
    }catch(err){
        console.log(err);
    }
}
result();