const fun = ((firstname,lastname)=>{
    console.log(
        `hey Guy ! How r u ? is this ur firstname : ${firstname} ?
    and lastName should be ${lastname}?
    `);
})
module.exports=fun;
const names= require('./4-names')
fun(names.firstname,names.lastname);