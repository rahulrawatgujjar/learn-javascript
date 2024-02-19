// create 3 div with common className box. Access them and add unique text to each

let divs= document.querySelectorAll(".box");
console.dir(divs);

let i=1;
for(div of divs){
  div.innerText=`new unique text ${i}` ;
  i++;
}