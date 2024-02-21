// create a button for toggling between light and dark mode
let modeBtn= document.querySelector("#mode");
let body= document.querySelector("body");
let currMode= "light";

mode.addEventListener("click",()=>{
  console.log("you are trying to change mode");
  if (currMode=="light"){
    body.classList.add("dark");
    body.classList.remove("light");
    modeBtn.innerText= "Dark mode";
    currMode="dark";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    modeBtn.innerText= "Light mode";
    currMode="light";
  }
});