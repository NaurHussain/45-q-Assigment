// 24. More Conditional Tests:  
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following: 
// • Tests for equality and inequality with strings 
// • Tests using the lower case function 
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to 
// • Tests using "and" and "or" operators 
// • Test whether an item is in an array 
// • Test whether an item is not in an array

//equality and inequality
let myName ="Ali";
console.log(myName == "Ali");           //true     equal to
console.log(myName !== "ali");          //true     not equal to

//numberics
let myNumber =10;
console.log(myNumber ==10);            //true
console.log(myNumber !==10);          // true
console.log(myNumber > 5);           // true    greater then
console.log(myNumber <5);           //false     less then
console.log(myNumber <=5);          //false     less then
console.log(myNumber >=5);          //true     greater then or equal to

//and & ===== or||
let num1 =10;
let num2 =5;

console.log(num1 >9 && num2> 5)          // false
      //true stat      false stat
      console.log(num1 >9 ||  num2> 5)        // 
       //true stat           false state