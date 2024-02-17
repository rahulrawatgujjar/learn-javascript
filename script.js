let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
// delete first
console.log("deleted",companies.shift());
console.log(companies);
// remove uber and ola at its place
console.log(`deleted ${companies.splice(1,1,"Ola")}`);
console.log(companies);
// add amazon at the end
companies.push("Amazon");
console.log(companies);