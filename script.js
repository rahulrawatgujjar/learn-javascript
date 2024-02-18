// filter 90+ marks from marks array
let marks= [23,34,98,89,95,68];
console.log(marks);

let plusMarks= marks.filter((val)=>{
  return val>90;
});

console.log(plusMarks);