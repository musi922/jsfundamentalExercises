//first Serie
const num = (a,b)=>a===100||b===100||b+a===100?true:false
console.log(num(1,100));

//second Serie
const getfileextension = (str)=>str.slice(str.indexOf("."));
console.log(getfileextension("index.html"));
console.log(getfileextension("index.confug.js"));

//third serie
const movecharsforwad = (str)=>{
    return str.split('').map(el=>String.fromCharCode(el.charCodeAt(0)+1)).join('')
    
}
console.log(movecharsforwad("abc"));

//fourth serie

const formatDate = (date=new Date())=>{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 1;
    

    return `${day}/${month}/${year}`
}
console.log(formatDate());

//fifth serie

const newstr = (str)=> str.includes("New!")?str:"New!"+str;
console.log(newstr("hello"));
console.log(newstr("New!hello"));