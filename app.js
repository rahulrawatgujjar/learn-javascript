function getData(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (id<=100){
        console.log(`Data ${id}`);
        resolve("success");
      } else {
        reject("fail");
      }
    },5000);
  });
}

// iife: immediately invoked function expression
// syntax: (here it takes a function without name. it may be arrow function, async function or a normal function)();

(async function(){
  await getData(1);
  await getData(2);
  await getData(3);
})();