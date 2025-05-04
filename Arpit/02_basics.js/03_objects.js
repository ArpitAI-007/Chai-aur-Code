// singleton
// object.create

// object literals

const MySym= Symbol("Key1")

const JsUser={
    name : "Arpit",
    [MySym]: "Mykey1",
    age : 18,
    location: "Mumbai",
    email: "arpit123@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]

}
// console.log(JsUser["email"])
// console.log(JsUser["location"])
// console.log(JsUser[MySym])

JsUser.email = "reet@123gmail.com"
// Object.freeze(JsUser)
JsUser.eamil= "Ckd@llgoogle.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting()); // if no () only reference of function comes function execution has'nt happened
console.log(JsUser.greeting2());








