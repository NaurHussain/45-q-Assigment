//3. Name Cases:  
//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase

let name1:string="NaureenHussain";
console.log(name1);

// lowercase
console.log(name1.toLocaleLowerCase());

//uppercase
console.log(name1.toUpperCase());

//titlecase
console.log(name1.charAt(0).toUpperCase() + name1.slice(1));
