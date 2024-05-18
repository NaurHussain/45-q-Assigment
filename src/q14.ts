// 14. Guest List:  
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
// each person, inviting them to dinner.

const invite: string []=["Junaid","Farhan","Zahid","Rashid"];
for( let t = 0; t < invite.length; t++){
    console.log(`Mr.${invite[t]} ! you are invited to dinner this sunday.\n` )
}