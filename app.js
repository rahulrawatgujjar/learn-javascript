// object: it is an entity which have properties and methods

const schoolClass= {
  className: "12th",
  roomNum: 3,
  count: 33,
  printData: function(){
    console.log(`Class: ${this.className}\nRoom No.: ${this.roomNum}\nTotal number of students: ${this.count}`);
  },
  print: function(){
    console.log("hello i am class object");
  }
}


const student= {
  fullName: "Rahul Rawat",
  marks: 98,
  printMarks: function (){
    console.log(this.marks);
  },
  printName(){
    console.log(this.fullName);
  },
  print: function(){
    console.log("hello i am student object.");
  }
};

// Prototype: every js object has a special property, which is known as prototype, which itself is an object
// Here we made schoolClass object, a prototype of student object so that we can access properties and methods of schoolClass object in student object
student.__proto__=schoolClass;

// Example 
console.log("Name of student:",student.fullName);
console.log("Marks of student:");
student.printMarks()
console.log("Class of student:",student.className);
console.log("Data about class of student:");
student.printData()
// If object and prototype has same method, then objects method will be used
console.log("Output of function defined in both:");
student.print()
