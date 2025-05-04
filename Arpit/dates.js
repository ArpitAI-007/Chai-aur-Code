// Dates
let myDate= new Date()
// console.log(myDate.toString()); //Wed Apr 30 2025 18:47:35 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Wed Apr 30 2025

// console.log(myDate.toJSON()); // 2025-04-30T18:48:19.754Z
 
// console.log(myDate.toLocaleDateString()); // 4/30/2025

// console.log(myDate.toLocaleTimeString()); // 6:49:20 PM

// console.log(myDate.toUTCString());

// console.log(typeof myDate);
// let createDate= new Date(2025, 5, 1, 23, 59)
let createDate= new Date("05-21-2025")
// console.log(createDate.toLocaleString());
let createDates= new Date()
console.log(createDates.getMonth());
console.log(createDates.getFullYear());
console.log(createDates.getDay()+1);




let timeStamps = Date.now()
// console.log(timeStamps);
// console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000)); // in seconds earlier was in milliseconds

`${console.log("Arpit Pathak what is the time by your watch:")} The time is:\n  ${console.log(createDates.getHours())} Minutes: ${console.log(createDates.getHours())} Seconds: ${console.log(createDates.getSeconds())}`

createDates.toLocaleString("default",{
    weekday: "long",
    timeZone: "Universal"
})
console.log(createDates);



