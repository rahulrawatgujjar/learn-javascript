// Async-Await :
//  async function alway return a promise
//  await pauses the execution of sorrounding async function until the promise is settled

async function getAllData(){
  await getData(1);
  await getData(2);
  await getData(3);
}

const output= getAllData();
console.log(output);

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