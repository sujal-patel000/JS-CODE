let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //myDate is object

let myCreatedDate = new Date(2023, 3, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2023, 3, 23, 3, 6)//also given time
console.log(myCreatedDateTime.toLocaleString());

let myCreatedDateTime2 = new Date("2024-03-10")//yyyy-mm-dd
console.log(myCreatedDateTime2.getTime());
let myTimeStamp = Date.now()//compare the time in milisecond
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)); //milisecond convert in second

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday: 'long'
}))



 