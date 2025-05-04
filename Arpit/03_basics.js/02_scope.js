//  var c=300  

let a =560
if(true){
    let a=10
    const b=20
    // console.log("Inner a is : ",a);
    // inner a is scope is till this of block
}


// console.log(b);
// console.log("Outer a is : ",a);
// console.log(c);

function one(){
 const username= "arpit"
 function two(){
    const website= "pinterest.com"
    console.log(username);
    
 }
//  console.log(website); // as the website is defined under function one
 two()
}
// one()

if(true){
   const username = "arpit"
   if(username=== "arpit"){
    const website= " at www.youtube.com"
    console.log(username+website);
    
   }
//    console.log(website); // foe this if only username is defined
   
}
// console.log(username); // as if block ke andar nahi likha hai 

/////  ++++++++++++++++ intresting ++++++++ //////

console.log(addOne(5)) // no error
function addOne(num){
    return num+1
}

console.log(addTwo(54)); // declaration ke pehle ecess to error and known as 
const addTwo = function addTwo(num){
    return num + 2
}
console.log(addTwo(54));
