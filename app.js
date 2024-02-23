class ToyotaCar{
  constructor(name,milage){
    console.log("Object is creating");
    this.carName=name;
    this.milage=milage;
  }

  start(){
    console.log("car started");
  }

  stop(){
    console.log("car stopped");
  }

  showName(){
    console.log(this.carName);
  }
}

fortuner= new ToyotaCar("Fortuner",22);
console.log(fortuner.carName, fortuner.milage);

camry= new ToyotaCar("Camry");
console.log(camry.carName, camry.milage);