//first Serie
const num = (a,b)=>a===100||b===100||b+a===100?true:false
console.log(num(1,100));

//second Serie
const getfileextension = (str)=>str.slice(str.indexOf("."));
console.log(getfileextension("index.html"));
console.log(getfileextension("index.confug.js"));