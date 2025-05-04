const ns= [ "Jiraya","tsunade","Orochimaru"]
const tollywood= ["Maari", "RRR","Kgf"]

// ns.push(tollywood)
// console.log(ns);
// console.log(ns[3][1]); // RRR

// const newArray= ns.concat(tollywood)
// console.log(newArray); 

const spread = [...ns, ...tollywood]
// console.log(spread);

const Arpit=[1,2,[5,9,[52,65,5]],52,8,[89,65]]
const flat= Arpit.flat(Infinity)

// console.log(flat);
 console.log(Array.isArray("Uzumaki_Naruto")) // not an array so nas is false
 console.log(Array.from("Krissh"))
 console.log(Array.from({name : "Arpit"})) // intersting always gives an empty array if it is not defined ki keys ka array ya values ka array banana hai..
 
 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3))
 




