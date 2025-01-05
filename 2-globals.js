/*
    Globals - why we need globals
    Because in Node js we do not have window access like in browser
    with globals variable --one can access any thing in our code from anywhere in code ..

    here we have alot of globals but we're learning a few
    Mainly --
    1. _dirname --it will give path to current directory
    2. _filename --it will give file name
    3. require --function to use modules
    4. module --info abt current modules
    5. process --info abt ENV where the program is being executed
 */
console.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log('hyy Node Js')
},1000);
