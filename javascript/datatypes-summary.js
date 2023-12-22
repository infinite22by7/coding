//primitive

// 7 types : String, Number, Boolean, null,undefined,Symbol,BigINt

const score = 100 //number
const scorevalue =100.3//number

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber =2323454654556n // BigInt




// Reference (Non primitive)

// Array, Objects,Functions

const heros =["oggy", "olly", "jack","bob"]
letmyObj = {
    name: "oggy",
    age: 18,
}

const myFunction = function(){
    console.log("hey olly");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);








//****************************************************************************//
 

// stack (Primitive), Heap (Non-Primitive)

let myname = "oggy"

let anothername = "akash"
anothername = "monu"

console.log(myname);
console.log(anothername);


let userOne = {
    email: "akashkumar1310mk@gmail.com",
    upi: "akashkumar1310mk@gmail.com"
}
 
let userTwo = userOne
 
userTwo.email = "akashgupta1310mk@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
