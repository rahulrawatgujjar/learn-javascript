class ToyotaCar{
  start(){
    console.log("car started");
  }

  stop(){
    console.log("car stopped");
  }

  setName(name){
    this.carName=name;
  }

  showName(){
    console.log(this.carName);
  }
}

let fortuner= new ToyotaCar();
fortuner.setName("Fortuner");
fortuner.showName();
console.log(fortuner);
