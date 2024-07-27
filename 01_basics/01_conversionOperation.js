let score = "33abc"
//"33abc" is not convert in number than the answer is NaN
//null is convert in 0
//"33" is convert in 33
//true  is conver in 1 & false is convert in 0
//undefind is not convert in number than the answer is NaN

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber) //type of valueInNumber is number
console.log(valueInNumber)// means convert a number ,"33abc" in not posible in to convert a number 

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
// 1 => true, 0 => false
//"" => false
//"sujal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)