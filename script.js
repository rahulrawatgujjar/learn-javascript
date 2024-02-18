// map method: it is like forEach but it can return values that can be assigned in an array

let nums=[1,2,3,4];

let newArray = nums.map((value)=>{
  return value**3;
});

console.log(newArray);