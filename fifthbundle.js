//given like string: 'webmaster'
//you return like string : abeemrstw

const givenstring = (str)=>str.split('').sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join('')
console.log(givenstring('webmaster'))

//second exercise
//string and counyt number of vowels

const giventext = (stri)=>{
    let result = stri.match(/[a,e,i,o,u,A,E,I,O,U]/g).length;
    return result
}
console.log(giventext('webmaster'))
console.log(giventext('RichardmusimeusbhgdusnmxA'))