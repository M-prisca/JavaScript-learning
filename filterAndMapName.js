/* Write a function that takes an array of objects, where each object has a name (string) 
and an age (number) property. The function should return a new array containing the names 
of all people older than 18, transformed to uppercase.*/

const people = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 17 },
    { name: 'David', age: 25 },
  ];
  const adultsPeople =(arr)=>{
        return arr
      .filter(({age})=>age>18)
      .map(({name})=>name.toUpperCase());
      }
    
   const adults = adultsPeople(people);
   console.log(adults); // Output: ['BOB', 'DAVID']