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
let truth = false; boolean
let array = ['apple','organes'] // array
// undefined 
// null 