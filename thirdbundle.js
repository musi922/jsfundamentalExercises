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

//findind number of evenn digits in an arrray

let evenn = (arr)=> arr.filter(el=> el%2===0).length;
console.log(evenn([1,2,3,4]));
console.log(evenn([1,2,3,4,5,6,7,8]));
console.log(evenn([1,2,3,4,9,10,12,11]));