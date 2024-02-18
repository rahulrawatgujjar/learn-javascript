// function to return no. of vowel in stirng
function countVowel(s){
  count=0;
  for(let val of s){
    if (val=="a" || val=="e" || val=="i" || val=="o" || val=="u"){
      count++;
    }
  }
  return count;
}


// same task using arrow function 
const totalVowel = (s)=>{
  count=0;
  for(let val of s){
    if (val=="a" || val=="e" || val=="i" || val=="o" || val=="u"){
      count++;
    }
  }
  return count;
};




str = prompt("Enter string:");
// console.log(`No. of vowels in ${str}: ${countVowel(str)}`); 
console.log(`No. of vowels in ${str}: ${totalVowel(str)}`); 