//Adding even digits in an array
let numbers = (num)=>{
    let result = 0
    for (let item of num){
        if(item%2===0){
             result += item
        }
    }
    return result
}
console.log(numbers([1,2,3,4]));

