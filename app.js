// class: it is a template for creation of objects
class Person{
  constructor(){
    this.species="homo sapiens";
  }

  eat(){
    console.log("eat");
  }

  sleep(){
    console.log("sleep");
  }

  work(){
    console.log("do nothing!");
  }
}

// Inheritance:
//      child class inherits properties and method of parent class
class Engineer extends Person{
  work(){
    console.log("Solve problems and build something.")
  }
}

let surender= new Engineer();
surender.eat();  
surender.work(); // method over-writing
console.log(surender.species);
