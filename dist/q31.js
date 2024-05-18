"use strict";
// 31. No Users:  
// Add an if test to Exercise 28 to make sure the list of users is not empty. 
// • If the list is empty, print the message We need to find some users! 
// • Remove all of the usernames from your array, and make sure the correct message is printed. 
Object.defineProperty(exports, "__esModule", { value: true });
let userName2 = ["ali", "mahad", "hussain", "admin", "farhan", "zahid"];
// to remove all members
//userName2 =[];
//console.log(userName2);
if (userName2.length > 0) {
    for (let i = 0; i < userName2.length; i++) {
        if (userName2[i] == "admin") {
            console.log(`\n Hello ${userName2[i]} would you like to see a status report?\n`);
        }
        else {
            console.log(`Hello ${userName2[i]} thank you for logging in again!`);
        }
    }
}
else {
    console.log(`We need to find some users!`);
}
