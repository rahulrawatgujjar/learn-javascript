// forEach method in arrays: it takes a callback function as an argument
//    A callback is a function passed as argument to another function.

let items=["car","bus","bike","cycle","scotter"];
items.forEach((val,idx)=>{                          // forEach has 3 arguments
  console.log(val.toUpperCase());
});

// higher order function: that takes function as argument or return a function.
