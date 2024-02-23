// You are creating a website for your college.
// create a class User with 2 properties name and email.
// it has a method viewData that allow user to view website data

// add an admin class that inherit from user class and have edit access to data

let data= "This is a webpage of College website";

class User{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }

  viewData(){
    console.log(`Data:\n${data}`);
  }
}

class Admin extends User{
  constructor(name,email){
    super(name,email);
  }
  
  editData(newData){
    data=newData;
  }
}


let surender= new User("Surender Suthar","surender@gmail.com");
surender.viewData();

let vishal= new Admin("Vishal","vishal@gmail.com");
vishal.editData("Website hacked by vishal");

surender.viewData();