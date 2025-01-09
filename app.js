const {readFile}=require('fs');

const gettext=(path)=>{
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

gettext('./content/first.txt')
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
