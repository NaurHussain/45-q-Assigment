"use strict";
// 9. Dinner Guests:  
// Working with one of the programs from Exercises 14 through 18, print a message indicating 
// the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let myFriends = ["Junaid", "Farhan", "Zahid", "Rashid"];
console.log(`I am inviting ${myFriends.length} number of friends to dinner which are following\n`);
for (let i = 0; i < myFriends.length; i++) {
    console.log(`${i + 1}. ${myFriends[i]}`);
}