function greet(name){
    console.log( `iam ${name} my sec is ${this.job}`)
}
const sec = {
    job: "pirlo"
}

greet.call(sec,["richard"])
greet.apply(sec,["richard"])
const bindfunction = greet.bind(sec,"ric")
console.log(bindfunction());
