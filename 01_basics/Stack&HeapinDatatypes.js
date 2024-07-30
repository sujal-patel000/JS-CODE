//Stack(primitive), Heap(non-primitive)

let myname = "sujal"
let anothername = myname
anothername = "vaghasiyasujal"
console.log(myname)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "sujal@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)