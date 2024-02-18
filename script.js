// function in js
function Sum(a,b){
  return a+b;
}
console.log(Sum(3,2));


// another example
function fun(){
  console.log("fun is called");
}


// arrow function in js (these are generally used for small task)
const findSum = (x,y)=>{
  return x+y;
};
console.log(findSum); // findSum is a variable that stores function defination
console.log(findSum(4,5));