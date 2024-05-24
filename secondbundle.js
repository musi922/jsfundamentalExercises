
const formatDate = (date=new Date())=>{
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() + 1;
    

    return `${day}/${month}/${year}`
}
console.log(formatDate());

