"use strict";
// 16. More Guests:  
// You just found a bigger dinner table, so now more space is available. Think of three more guests 
// to invite to dinner. 
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table. 
// • Add one new guest to the beginning of your array. 
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
const invite = ["Junaid", "Farhan", "Zahid", "Rashid"];
console.log(`we have 3 more friends to invite on dinner\n`);
// add 3 more friends
// add at beginning
invite.unshift("Sir isfhan");
//["Sir isfhan,"Junaid","Farhan","Zahid","Rashid"];
console.log(invite);
// add at middle
invite.splice(2, 0, "Sir Zia");
console.log(invite);
//add at last
invite.push("Sir Amin");
console.log(invite);
//print all friends along with message
for (let t = 0; t < invite.length; t++) {
    console.log(`${invite[t]} ! you are invited to dinner.`);
}
// console.log(`we have 3 more friends to invite on dinner\n`)
// // adding three more friends
// // add at beginning
// myfriends.unshift("Isfhan");
// // ["Isfhan"; "Junaid";"Hussain";"Ali";"Bilal"];
// console.log(myfriends);
// //add at middle
// myfriends.splice(2, 0, "sir zia");
// console.log(myfriends);
// //add at last
// myfriends.push("sir Amin");
// console.log(myfriends)
// // print all friends along with message
// for(let i = 0; i < myfriends.length; i++){
//     console.log(`Mr. ${myfriends[i]} you are invited to dinner`);
// }
