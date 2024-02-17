let gameNum=33;
let userNum;
while (true){
  userNum=prompt("Guess the number:");
  if( gameNum==userNum){
    console.log("you guess correct number ",userNum)
    break;
  }
}