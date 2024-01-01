// const tinderUser = new Object() creates an empty object but singleton
const tinderUser = {}  //creates an empty object but non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  here we will get a new object with obj1 contents at index1 and obj2 contents at index2
// const obj3 = Object.assign({}, obj1, obj2, obj4) using assign() we can spread the contents of obj1,obj2,obj4  into the new obj3

const obj3 = {...obj1, ...obj2} //yahan par spread operator ka use karke humlog dono objects ke contents ko individual elemets ki tarah treat karsakte hai
// console.log(obj3);

//Database se data array ke form mein aata hai
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email //yahan par user array ke index 1 par jo object hai uski email wali property ko access karre hai using dot(.) operator.
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); returns an array of all the keys in the tinderUser object
// console.log(Object.values(tinderUser)); returns an array of all the values in the tinderUser object
// console.log(Object.entries(tinderUser)); returns an array of all the keys and values in the tinderUser object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //this is destructuring.Yahan courseInstructor wali property ko course object se nikale aur usko instructor naam de diye

// console.log(courseInstructor);
console.log(instructor);

//Api se data object ke form mein aata hai

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//Array ke form mein bhi data aata hai api se
[
    {},
    {},
    {}
]