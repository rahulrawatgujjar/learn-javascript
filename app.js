class Person{
  constructor(name){
    this.name=name;
    this.species="homo sapiens";
  }

  eat(){
    console.log("eat");
  }
}

// super keyword:
//    it is used to invoke constructor of parent class before using this or returning from child constructor
//    it is also used to pass argument for parent class constructor
//    it is also used to access properties and method of parent class in child class using super."name_of_property_or_method()"

class Engineer extends Person{
  constructor(name,branch){
    super(name);
    this.branch=branch;
  }

  work(){
    super.eat();
    console.log("Solve problems and build something.")
  }
}

let surender= new Engineer("Surender Suthar","Civil engg.");
console.log(surender.name);
console.log(surender.branch);
console.log(surender.species);
surender.work();