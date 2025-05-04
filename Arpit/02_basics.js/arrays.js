// array
 const myArr = [25, 58 , 515, 54,"Naruto_uzumaki"]
 myArr.shift()
//  console.log(myArr);
//  console.log(myArr.length);
 
// Array methods

myArr.push("Namikaze_Minato")
// myArr.unshift("Uchiha")
// console.log(myArr);

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr); // returns string as the datatype

// slice and splice

console.log("A ",myArr);

const new1 = myArr.slice(1,3)
console.log(new1);
console.log("B ",myArr);

const new2 = myArr.splice(1,3)
console.log("C ",myArr);

console.log(new2);


