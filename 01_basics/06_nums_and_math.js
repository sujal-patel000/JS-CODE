const score = 400  
console.log(score); //in just value

const balance = new Number(100)
console.log(balance); //specification of the given value is in number
console.log(balance.toString().length) //specification of the given value is in string
console.log(balance.toFixed(1))//ans be like 100.0 decimal value included

const otheNumber = 123.89887
console.log(otheNumber.toPrecision(4)); //means roundOf the 4 number in the value like 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//ans is given the coma like indian values(10,00,000)

//++++++++++++++++++++++++++++++++++++  maths  +++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.6)); // roundof the value 
console.log(Math.ceil(4.2));  // ceil means upper value given like ans is 5
console.log(Math.floor(4.9)); //floor maens lower value given like ans is 4

console.log(Math.min(4, 5, 5, 3, 2));
console.log(Math.max(4, 6, 5, 3, 2));

console.log(Math.random());//roundof value is between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1)//math.floor is given value like value is 0.23 than ans is 0 and add 1 is liuke ans is 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));//using max-min means range is balance and + 1 is like 0 value avoided
                                                                //and add the min that value is fixed given 10














