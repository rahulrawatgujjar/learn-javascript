// map method: it is like forEach but it can return values that can be assigned in an array

let nums=[1,2,3,4];

let newArray = nums.map((value)=>{
  return value**3;
});

console.log(newArray); // [1, 8, 27, 64]



// filter method: to filter element based on some condition. Elements for which condition is true get stored in array.

let items = [1,3,53,5,4,6,7];

let newItems = items.filter((value)=>{
  return value%2==0;
});

console.log(newItems);



// reduce method: perform some operations and reduce the array to a single value. It returns that single value.

let array1 = [1,2,3,4,2];
// find sum
const sumArray1= array1.reduce((res,curr)=>{
  return res+curr;
});

console.log(sumArray1);

// find maximum element
const maxArray1= array1.reduce((res,curr)=>{
  return curr>res ? curr : res;
});

console.log(maxArray1);