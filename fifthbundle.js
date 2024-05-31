//given like string: 'webmaster'
//you return like string : abeemrstw

const givenstring = (str)=>str.split('').sort().join('')
console.log(givenstring('webmaster'))