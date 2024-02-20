// DOM manipulation: insert elements

let div = document.querySelector("div");

let button = document.createElement("button");
button.innerText= "click me!";
console.log(button);

div.prepend(button);

