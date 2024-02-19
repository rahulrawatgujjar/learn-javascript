// get html elements

// using id
let heading= document.getElementById("my-id");
console.log(heading);
console.dir(heading);

// using className
let classItems= document.getElementsByClassName("my-class");
console.dir(classItems);

// using TagName
let items= document.getElementsByTagName("p");
console.dir(items);


// using querySelector

let idItemsQ= document.querySelector("#my-id");
console.dir(idItemsQ);

let classItemQ= document.querySelector(".my-class");
console.dir(classItemQ);

let classItemsQ= document.querySelectorAll(".my-class");
console.dir(classItemsQ);

let tagItemQ= document.querySelector("p");
console.dir(tagItemQ);
let tagItemsQ= document.querySelectorAll("p");
console.dir(tagItemsQ);