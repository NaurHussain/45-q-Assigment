"use strict";
// 43. Unchanged Magicians:  
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name. 
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames2 = ["Farhan", "Ali", "Zahid", "Ahmed"];
//making a copy of an array
let magicianNamesCopy = [...magicianNames2];
function show_magicians(greet) {
    let withGreeting = "";
    for (let item of magicianNamesCopy) {
        withGreeting += `${greet} ${item}\n`;
    }
    return withGreeting;
}
;
let myGreeting = show_magicians("Hello");
let makeArray = myGreeting.split(`\n`);
console.log(makeArray);
// original array
console.log(magicianNames2);
