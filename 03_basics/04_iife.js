// Immediately Invoked Function Expressions (IIFE)
//Global variables kabhi kabhi function ke andar ke variables ko pollute kardete hai isliye
//() ye bracket ko koi bhi chiz se wrap karne se automatically ek new scope banjata hai uska
//Isliye function ko () bracket mein wrap karne se uska new scope ban gaya fir humlog usko direct call karsakte hai using this ().
//Jab 2 IIFE ek saath likhe to humlog ko explicitly semi colon lagana padhta hai.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')