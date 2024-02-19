// innerHTML:
//    return plain text and html content of element and its children

let div= document.querySelector("div");
console.dir(div);
console.log(div.innerHTML);
                            // <h1>This is heading</h1>
                            // <div>This is a div</div>

div.innerHTML="<button>click me</button>";