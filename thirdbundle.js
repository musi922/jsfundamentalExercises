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
//given array create array of even numbers 
let arrayofnumbers=(numbe)=>{
    let result = []
    for (let item of numbe){
        if(item%2===0){
             result.push(item)
        }
    }

    return result
}
console.log(arrayofnumbers([1,2,3,4]));
//simple way
let arrayofnumber=(numbe)=>numbe.filter(a=>a%2===0)
console.log(arrayofnumber([1,2,3,4]));

//finding if array is sorted in ascending order
let sortedorder = (arra)=>{
    for(let i=0;i<arra.length ;i++){
        if(arra[i] > arra[i+1]){
            return false;
        }
    }
    
    return true

}
console.log(sortedorder([1,2,3,4]));
console.log(sortedorder([8,9,3,4]));
//finding number char in text and remove them them

let fun = (str)=>{
    let str1 = str.replace(/[0-9]/g, '')
    return str1
}
console.log(fun("heloo1234"));


//find numvers in text and separate with text
let funs = (str)=>{
    let str1 = str.match(/[0-9]/g, '').reduce((a,b)=>a+parseInt(b),0)
    let str2 = str.match(/[a-zA-Z]/g, '').join('')
    return {str1,str2}
}
console.log(funs("heloo1234 helo"));



