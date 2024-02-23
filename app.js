// You are creating a website for your college.
// create a class User with 2 properties name and email.
// it has a method viewData that allow user to view website data

let data= "this is a webpage";

class User{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }

  viewData(){
    console.log(`Data:\n${data}`);
  }
}

let surender= new User("Surender Suthar","surender@gmail.com");
surender.viewData();