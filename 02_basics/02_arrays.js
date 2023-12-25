const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  Here we can only combine 2 arrays using concat()
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //Here we can combine as many arrays as we want using the spread operator(...)
//The spread operator treats each array element individually
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//This converts the nested array into a single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//Checks whether "hitesh" is an array
console.log(Array.from("Hitesh"))//Converts "Hitesh" into an array
console.log(Array.from({name: "hitesh"})) // interesting 
//When you pass an object as an argument to Array.from() method it will return an empty array because we need to specify array kiska banana hai object ki keys ka ki object ki values ka.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//Array.of() is used to create an array of specified variables