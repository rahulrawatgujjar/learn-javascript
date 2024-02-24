// asynchronous :
//  It allows next instructoin to execute in parallel with current instruction so that code flow do not get blocked

console.log("1");
console.log("2");

function hello(){
  console.log("hello");
}
setTimeout(hello,2000);

setTimeout(()=>{
  console.log("world");
},2000);

console.log("3");
console.log("4")