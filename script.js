// DOM manipulation: insert elements

let div = document.querySelector("div");

let button = document.createElement("button");
button.innerText= "click me!";
console.log(button);

// append: insert at the end of element
div.append(button);

// insert at the begining of element
div.prepend(button);

