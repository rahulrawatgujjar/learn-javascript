// take n as input | create an array contain 1 to n numbers | find sum and product using reduce method
const n= prompt("Enter n:");
let numbers=[];
for(let i=0; i<n; i++){
  numbers.push(i+1);
}
console.log("numbers:",numbers);

const sum= numbers.reduce((prev,curr)=>{
  return curr+prev;
});
console.log("sum:",sum);

const product= numbers.reduce((prev,curr)=>{
  return prev*curr;
});
console.log("product:",product);