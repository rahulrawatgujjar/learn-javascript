let items=[1,2,3,4,5];

// push elements at the end
items.push(6,7,8,9);
console.log(items);

// pop from end
let val=items.pop();
console.log("deleted",val);
console.log(items);

// convert array to string
let str= items.toString();
console.log("array to string:",str);

// concat to join multiple array
let dcHeroes=["superman","batman"];
let marvelHeroes=["ironman","captain america","hawkeye","thor"];
let indianHeroes=["shaktiman","krish","g-one"];
let heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

// unshift : to append at start
marvelHeroes.unshift("black widow");
console.log(marvelHeroes);

// shift : to pop from start
marvelHeroes.shift();
console.log(marvelHeroes);

// slice : like list in python
console.log("marvelHeroes:",marvelHeroes);
let returnedList=marvelHeroes.slice(1,3);
console.log("returnedList",returnedList);
console.log("marvelHeroes:",marvelHeroes);


// splice : splice(startIndex,coutOfDeleted,item1,item2,item3....to..insert...)
let nums=[1,2,3,4,5,6,7,8]; // modify original array
console.log(nums);
// delete
nums.splice(2,1);
console.log(nums);
// insert
nums.splice(2,0,3);
console.log(nums);
// replace
nums.splice(2,1,-3);
console.log(nums);
// delete multiple and insert multiple
nums.splice(2,3,11,11,11,11);
console.log(nums);
// delete all from
nums.splice(4);
console.log(nums);
