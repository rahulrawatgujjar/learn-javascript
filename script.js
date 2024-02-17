let marks=[97,35,25,54];
let sum=0;
for(let val of marks){
  sum+=val;
}
console.log(`Average marks of class: ${sum/marks.length}`);