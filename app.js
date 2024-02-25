// fetch api:
//  It provide interface for fetching(sending and receiving) resources
//  It uses request and response objects
//  The fetch() method is used to fetch data
//  It return a promise with result as a JSON
//  We have to convert it into javascript object using json() method which is also using promise

const btn= document.querySelector("#btn1");
const para= document.querySelector("#para1");


const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts= async ()=>{
  console.log("Getting data..........");
  let response= await fetch(URL);
  console.log(response);
  let data= await response.json(); 
  console.log(data)
  para.innerText=data[0].text;
}

btn.addEventListener("click",getFacts);