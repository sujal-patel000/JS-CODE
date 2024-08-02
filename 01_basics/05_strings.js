const name = "sujal"
const count = 50
 
//console.log(name + count + "value");

console.log(`Hello my name is ${name} and my count is ${count}`)

const gamename = new String('sujal123')
 console.log(gamename[0])
 console.log(gamename.__proto__)
 console.log(gamename.length)
 console.log(gamename.toUpperCase())
 console.log(gamename.charAt(2))
 console.log(gamename.indexOf('l'))

 const newString = gamename.substring(0, 4)
 console.log(newString) 

 const anotherString = gamename.slice(-8, 4)
 console.log(anotherString)

 const newStringOne = "   sujal   "
 console.log(newStringOne)
 console.log(newStringOne.trim())
 //trim is use for the remove space

const url = "https://sujal.com/sujal%20vaghasiya"
console.log(url.replace('%20', '-'))
console.log(url.includes('sujal'))  //ask the string to includes 'sujal'

