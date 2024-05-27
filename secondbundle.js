const result = (str)=>str.length < 3?str:str.slice(0,3) + str.slice(-3);
console.log(result("musimerichard"));
console.log(result("ri"));
console.log(result("ric"));