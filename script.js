// event handling method 2 (node.event = arrowFunction)

let btn1= document.querySelector("#btn1");
btn1.onclick= (evt)=>{                    // evt is event object
  console.log("button 1 is clicked");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX);
  console.log(evt.clientY);
};

// script.js have high priority than inline event handling
let div = document.querySelector("div");
div.onmouseover= (evt)=>{
  console.log("js event using node.event");
}

// previous will be overwritten by current (this is drawback of method 2)
btn1.onclick= (evt)=>{
  console.log("overwite btn1.onclick");
};