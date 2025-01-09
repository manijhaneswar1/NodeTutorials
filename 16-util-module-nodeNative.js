const util = require('util');
const {readFile,writeFile} = require('fs');

const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);

const result = async ()=>{
    try{
        const first=await readFilePromise('./content/first.txt','utf8');
        const second=await readFilePromise('./content/second.txt','utf8');
        await writeFilePromise('./content/subFolder/test.txt',`this is awesome with util module....:-${first} and ${second}}`);
        console.log(first);
        console.log(second);
    }catch (err){
        console.log(err);
    }
}
result();