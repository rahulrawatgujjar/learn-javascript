// string methods

let str= "raHul";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// to remove white space
console.log("  hello ".trim());

// slicing
console.log(str.slice(0,3));
console.log(str.slice(3));

// concatination
let str1="rahul";
let str2="rawat";
let result= str1.concat(str2);
console.log(result);
console.log(str1+str2);

// replace ( and replaceall()
let exp= "rahulrawat";
console.log(exp.replace("r","n"));
console.log(exp.replaceAll("r","n"));

// charAt
console.log(str.charAt(2));