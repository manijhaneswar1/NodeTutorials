const os=require('os');
console.log(os.userInfo())

console.log(`The system uptime is ${os.uptime()}`)

const allDetails={
    name : os.type(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    release : os.release(),
}
console.log(allDetails.release)
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())