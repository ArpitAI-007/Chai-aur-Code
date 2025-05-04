const Myfunc = function() {
    // console.log("my name is arpit pathak")
}
Myfunc()
// console.log(typeof Myfunc);

const arr= ["arpit","puri"]
// console.log( typeof arr);
// Primitive call by value
// 7 types: string, number, boolean, null, undefined, symbol,bigInt
// return type of all these seven is number
const score= true
// console.log(typeof score);

const n = 200.5
// console.log(typeof n);

let userEmail;
const temp=null

const id= Symbol("Arpit")
const id1 = Symbol("Arpit")
// console.log(id === id1); // false as symbol are unique






// Reference type call by reference
// arrays, objects, functions
// return type of these three are object for function is object function


const heros = ["shaktiman", "power rangers", "arpit"]
// console.log(heros[0]);
let myObj={
    name: "Arpit",
    age: 19,
};
// console.log(typeof myObj);

 ///  stack  and heap memory in js 
  /// stack for primitive as copy is assigned to you
  // heap for non-primitive as refernce is passed

  let myName = "Arpit Pathak"
  let an= myName
  an= "reet"
  console.log(myName);
  console.log(an);
  
let userOne ={
 name: "Reet",
 emailId: "arpit@gmil.com",
}
let userTwo = userOne

userTwo.emailId = "123@gmial.com"
console.log(userOne.emailId);
console.log(userTwo.emailId);

