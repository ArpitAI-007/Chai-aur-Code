// const tinderuser= new Object()

const tinderuser = {}
tinderuser.id= "123abc"
tinderuser.name= "Sammy"
tinderuser.isLoggedIn= true


// console.log(tinderuser);

const regurlarUser = {
    email: "123@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Arpit",
            lastname: "Pathak"
        }
    }
}
// console.log(regurlarUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
// const obj3= {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3= {...obj1,...obj2}


  
// console.log(obj3); // same problrem as in the array
// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); // returns array of all the keys of the tinderuser object 
// console.log(Object.values(tinderuser)); 
// returns an array of values
// console.log(tinderuser.hasOwnProperty("isLogged"));
// console.log(Object.entries(tinderuser));


const course = {
    coursename : " ui/ux developer",
    price : "999",
    courseInstructor : "arpit pathak",
}

 const{courseInstructor: a} = course // extracted value is courseInstructor // destructuring any object 

console.log(a);

// Json 
// {
//     "name": "naam hai sidhhu",
//     "cousename": " js in hindi"
//     "price": "500",
// }

[
    {},
    {},
    {}

]


myfunc(5)
 function myfunc(num){
    console.log( num+2);
}



