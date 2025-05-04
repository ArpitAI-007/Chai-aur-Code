a="hello" + "world"
const name="Arpit"
const age="19"
console.log(`Hello my name is ${name} and my age is ${age} and i want to say hello world`);

// console.log(a);

const gameName= new String("namikaze_minato_4th_Hokage")
console.log(gameName[0])
console.log(gameName.__proto__); // object 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('e'));

const myName = gameName.substring(0,8)
console.log(myName);
const  playname= gameName.slice(-15,8)
console.log(playname);

const trim= "    Naruto    "
console.log(trim.trim())

const url= "https://naruto.com/uchihamadara"
console.log(url.replace('madara','itachi-shishui'));

console.log(url.includes('itachi')); // stored in stack so gives a copy

console.log(gameName.split('_'));









