// 15. Changing Guest List: 
// You just heard that one of your guests can’t make the dinner, so you need to send out a new 
// set of invitations. You’ll have to think of someone else to invite. 
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it. 
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting. 
// • Print a second set of invitation messages, one for each person who is still 
// in your list. 

const invite: string []=["Junaid","Farhan","Zahid","Rashid"];
console.log(`Due to some personal reason Mr. ${invite[1]} will not come on dinner`);
invite[1]= "Shahid hussain";
console.log(`new list of my friends who are comming to my dinner\n`)
for(let t =0; t< invite.length; t++){
    console.log(`${t + 1}. ${invite[t]}! you are invited to dinner this sunday.}`);
}
// /console.log(Mr.${invite[1]} ! you are invited to dinner this sunday)


