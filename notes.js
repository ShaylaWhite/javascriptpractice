// Functions ///



function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
} 

var name = prompt('Whats your name?');
greeting(name);


// While loops///

var num = 0;

while (num < 100) {
    num +=1;
    console.log(num)
} 

// For Loop///

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data Types //

let yourAge = 29; //number
let yourName = 'Bob'; // string
let thatbitch = {first: 'Shayla', last: 'Money'}; //object 
let truth = false; //boolean
let array = ['apple','organes'] // array
// undefined 
// null 

// Strings (common methods) //

let fruit = 'peach';
let bestfruit = 'mango/apple';

console.log(fruit.length);

//Arrays 

let fruits = ['banana', 'apple', 'dogs']

//Looping through Array Pattern

let emptyArray = new Array(); /// same as emptyArray = []

for(let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);