// Callback hell:
// Nested callbacks stacked below one another forms a pyramid like structure
// which is difficult to understand

function getData(id,getNextData){
  setTimeout(()=>{
    console.log(`Data ${id}`);
    if (getNextData){
      getNextData();
    }
  },2000);
}

// In this way all will start their timer at same time and wait parallel and give output at same time

// getData(1);
// getData(2);
// getData(3);

getData(1,()=>{
  getData(2,()=>{
    getData(3,()=>{
      getData(4);
    });
  });
});


