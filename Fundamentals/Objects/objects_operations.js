//object operation in javaScript
//create an object
let person={
    fname:"prisca",
    age:19
};
//accessing a property of an object with (. notation)=>objectName.propertyName, array-like notation =.objectName['propertyName']
person.fname;
//modifying a property
person.fname="uwera";
//adding a property 
person.job="engineer";
//deleting a property
delete person.age;
//Checking if a property exists =>propertyName in objectName 
console.log("age" in person);


//displaying an object
console.log(person);