// Large Shirts:  
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.

// function make_shirt(size:string, label:string){
//     return size + label
// }
// let myFunction = make_shirt("large"," i Love TypeScript");
// console.log(myFunction);

//making large as default
// function make_shirt(size:string= "large", label:string){
//     return size + label
// }
// let myFunction = make_shirt("large"," i Love TypeScript");
// console.log(myFunction);


//making medium as default
// function make_shirt(label:string, size: string="medium"){
//     return size + label
// }
// let myFunction = make_shirt(" i Love TypeScript");
// console.log(myFunction);

//making shirt of any size
 function make_shirt(label:string, size: string){
     return size + label
 }
 let myFunction = make_shirt(" any size", " i Love TypeScript");
 console.log(myFunction);
