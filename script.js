// create a new button element with text "click me", background color red and text color white.
//  Then insert it into body as first element

let body= document.querySelector("body");
console.log(body);
let button= document.createElement("button");
button.innerText="Click me";
button.style.backgroundColor="red";
button.style.color="white";
body.prepend(button);