//this current context(object) ke variables/functions/properties ko access deta hai
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//In the above example this user object ki saari properties ka access dera hai welcomeMessage function ko

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); by executing it humlog ko pata chalega ki node mein jb tum globally kuch declare nhi karoge to this humlog ko ek empty object dega.
//Note:Browser mein jab tum above line likhoge to tumko window object dega.Kyuki window object browser mein global object hota hai by default 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  Functions mein this variables ko access nhi deta hai
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); Functions mein this variables ko access nhi deta hai
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}


 chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //This way of declaration is also called as implicit return(Mtlab maan liya return karega)

// const addTwo = (num1, num2) => ( num1 + num2 ) //Above line ko aese bhi likh sakte hai.Use this one ye prefered hai

const addTwo = (num1, num2) => ({username: "hitesh"}) //objects ko arrow funtions mein aese return karte hai


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()