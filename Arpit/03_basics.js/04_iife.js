/// IIFE ///
// Named iife

(function chai(){
 console.log("Raita fail gaya!!");
 
}) (); // sc is necessary

// Unamed iife

( (name) => {
console.log(`DB connected TWO ${name}`);

     }
)("Vibhu")
