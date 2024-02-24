// Promise: 
// It is an object. It is returned to us.
// It has 3 states pending, fullfilled and rejected
// It takes a funtion as parameter which has 2 handler i.e. resolve and reject
//  which themselves are callbacks provided by js
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

// Promise chaining
let p1= getData(1);
p1.then((res)=>{
  console.log(res);
  p2=getData(2);
  p2.then((res)=>{
    console.log(res);
    p3=getData(3);
    p3.then((res)=>{
      console.log(res);
    });
  });
});

p1.catch((err)=>{
  console.log(err);
})



// then for getting res if fullfilled
// catch for getting err if rejected