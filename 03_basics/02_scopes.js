//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); Yahan error aaega kyuki bahar wala function(parent) andar wale function(child) ke variables ko access nhi karsakta hai,par andar wala function(child) parent ke variables ko access karsakta hai.Isko closure bolte hai

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); Isko nhi access karpayega
}

// console.log(username); Yahan bhi access nhi kar paayega


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ //Jb function is way mein declare ho to usko call karsakte hai declaration ke syntax se pehle(Isko hoisting bolte hai)
    return num + 1
}



addTwo(5)
//Below type of funtion declaration is also called as expression
const addTwo = function(num){ //jb function ko aese declare karte hai to usko declaration se pehle call nhi kar sakte(Error show karega)
    return num + 2
}