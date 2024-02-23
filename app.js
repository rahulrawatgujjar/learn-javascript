// error handling 

let a= 3;
let b= 5;

console.log("a:",a,"b:",b);
console.log("a+b:",a+b);

try{
  console.log("a*b:",a*c); // here is the error
} catch(err){
  console.log(err);
}

console.log("a-b:",a-b);
