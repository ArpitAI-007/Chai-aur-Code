const user = {
    username: "Vibhu",
    price: 999 ,
    
    welcomeMessage: function(){
    console.log(`${this.username} , You are welcome sir ji.!`);
    console.log(this);
    
    }
}
// user() // it is an object not a function
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} only happens in node environment as this points to empty obj but in console it prints window

// function chai(){
//     let username = "Godzilla"
//     console.log(this); // in node envi.. this ke andar kuch to hai
//     console.log(this.username); // undefined aaye ga
    
// }
// chai()

const example = function exmaple(){
    let username = "Godzilla"
    console.log(this); // in node envi.. this ke andar kuch to hai
    console.log(this.username); // undefined aaye ga
    
}
// example()

const arrow = () => {
    let username = "Godzilla"
    console.log(this); // in node envi.. this ke andar kuch to hai
    console.log(this.username); // undefined aaye ga
    
}
arrow()

// const myObj= {
//     name: "Arpit"
// }
// console.log(myObj.name);

// const addTwo = (num1, num2)=> {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // fancy tarika no curly braced so no need of the return statement


const addTwo = (num1,num2) => ({username:"hitesh"})

console.log(addTwo(9,11));

const a= new String("arpit")
console.log(a.__proto__);
console.log(a.indexOf(a));

