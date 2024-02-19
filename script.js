// document object model
console.log(window.document);
console.dir(window.document);

document.body.childNodes[1].style.background="green";
document.body.childNodes[5].innerText="It is changed using js";