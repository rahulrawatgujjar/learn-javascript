let marks= [97,35,25,54];
console.log(marks);

// type of array 
console.log(typeof marks);

// length of array
console.log(marks.length);

// access an element using index
console.log(marks[0]);

// modifying value at an index
marks[0]=77;
console.log(marks);

// array may contain different types of data
let items=["car",true,12,null,4.4];
console.log(items);

// print array using for loop
let cities=["bhiwani","hisar","rohtak","delhi"];
for(let i=0; i<cities.length; i++){
  console.log(cities[i]);
}

// using for-of loop
for(let city of cities){
  console.log(city.toUpperCase());
}