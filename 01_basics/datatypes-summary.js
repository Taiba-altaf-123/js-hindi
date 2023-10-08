//On the basis of how data is stored and accessed from the memory there are 2 tyes of datatypes:Primitive and Non-Primitive
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//*****************************************************************
//Stack(Primitive),Heap(Non-Primitive)

//Stack
let myName="taiba"
let anotherName=myName
anotherName="areeba"
console.log(myName)
console.log(anotherName);

//Heap

let userone={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let usertwo=userone
usertwo.email="taiba@gmail"
console.log(userone.email);
console.log(usertwo.email);