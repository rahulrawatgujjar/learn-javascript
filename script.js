// Event Listeners (method 3)

let btn1= document.querySelector("#btn1");

btn1.addEventListener("click",(evt)=>{
  console.log("button 1 is clicked using handler 1");
  console.log(evt);
});

// we can handle same event multiple times
btn1.addEventListener("click",(evt)=>{
  console.log("button 1 is clicked using handler 2");
});



let div= document.querySelector("div");
const handler= (evt)=>{
  console.log("div is hovered");
};
div.addEventListener("mouseover",handler);

div.removeEventListener("mouseover",handler);