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
//concatinat two strings except there first characters

const twostr = (str1,str2)=>str1.slice(1) + str2.slice(1)
console.log(twostr("pirlo","gang"));
//given two values find the one nearest two 100

const twoval = (val1,valu2)=> (100-val1)<(100-val1)?val1:valu2
console.log(twoval(30,90));