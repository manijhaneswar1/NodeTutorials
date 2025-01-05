const path=require('path');
console.log(path.sep)

const filepath=path.join('/content','/subFolder','test.txt');
console.log(filepath)

const absolute=path.join(__dirname,'/content','/subFolder','test.txt');
const absolute2=path.resolve(__dirname,'/subFolder','test.txt');
console.log(absolute)
console.log(absolute2)

console.log(path.extname(filepath))
console.log(path.basename(filepath))
console.log(path.dirname(filepath))
console.log(path.isAbsolute(path.dirname(filepath)))