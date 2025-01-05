const fs=require('fs');
const firstText=fs.readFileSync('./content/first.txt','utf8');
const secondText=fs.readFileSync('./content/second.txt','utf8');
console.log(firstText);
console.log(secondText);

fs.writeFileSync('./content/writeFileSync.txt',`this is WRITE FILE by fs.writeFileSync 
    so i'm gonna combine ${firstText} ---- ${secondText}}`
)

//append
fs.writeFileSync('./content/writeFileSync.txt',
    `FROM HERE the Append File --this is WRITE FILE by fs.writeFileSync
          so i'm gonna combine ${firstText} ---- ${secondText}'`,
    {flag : 'a'},
)