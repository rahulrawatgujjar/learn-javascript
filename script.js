let score = prompt("Enter score:");
let grade;

if (score<=100 && score>=90){
  grade="A";
} else if (score>=70){
  grade="B";
} else if (score>=60){
  grade="C";
} else if (score>=50){
  grade="D";
} else if (score>=0){
  grade="E"
}

console.log(grade);