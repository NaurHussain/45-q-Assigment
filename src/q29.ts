
// 29. Favorite Fruit:  
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array. 
// • Make an array of your three favorite fruits and call it favorite_fruits. 
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement, 
// such as You really like bananas!

let favorite_fruits:string[]=["Banana","Apple", "Mango"];

 if(favorite_fruits.includes("Banana")){
    console.log("I really like Banana!");

 } if(favorite_fruits.includes("Apple")){
    console.log(`I really like Apple!`)

 }if (favorite_fruits.includes("Orange")){
 }else{
    console.log("fruits are not avaliable");
 }

if(favorite_fruits.includes("Mango")){
   console.log("I really like Mango ") 
}
if (favorite_fruits.includes("Grapes")){
    console.log("I really like Grapes ")
}else{
    console.log("fruits are not avaliable!");
}
   



//let fruitAvailable="Mango";
//let fruiteAvailable="Orange";

//if(favorite_fruits.includes(fruiteAvailable)){
    //console.log(`i would like to eat ${fruiteAvailable}`);


//}else {
    //console.log(`fruits are not avaliable!`);
//}
