//Exercise one getting two numbers and slice from last three and first three
const result = (str)=>str.length < 3?str:str.slice(0,3) + str.slice(-3);
console.log(result("musimerichard"));
console.log(result("ri"));
console.log(result("ric"));

//extracting the first half of the string
const extract = (stri) =>stri.slice(0 , stri.length/2)
console.log(extract("code"));
console.log(extract("genius"));
console.log(extract("pirlo"));