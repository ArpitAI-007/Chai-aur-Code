// console.log("h");

const myFunction = function(){
// console.log("Arpit pathak")

}
myFunction()
// function addTwonumbers(number1,number2){
//     console.log(number1+number2);   
// }

function addTwonumbers(number1,number2){
    // let result= number1+ number2
    // return result
    // console.log("Hitesh");
    return number1+number2
}
  const results = addTwonumbers(68,2)
//   console.log("Result: ", results); // undefined 

function loginUserMessage (username){
    if(!username){
        console.log("Please enter a username"); 
    }
    else{
    return `${username} just logged in`
    }
}
// function loginUserMessage1 (username == "sam"){ // it will atleast be sam 
//     if(!username){
//         console.log("Please enter a username"); 
//     }
//     else{
//     return `${username} just logged in`
//     }
// }



// console.log(loginUserMessage("Arpit"))
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2, ...num1){
 return num1
} // rest operator

// console.log(calculateCartPrice(200, 500, 900, 8500))

const user = {
  username : "arpit",
  prices: 200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}
// handleObject(user)
handleObject({
    username : "sam",
    price: 399
})
const myArray = [200, 400, 600, 800]
function returnSecondValue(get){
    return get[1]
}

console.log(returnSecondValue(myArray))

