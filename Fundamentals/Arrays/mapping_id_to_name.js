/*Write a function that takes an array of objects,
 where each object has an id and a name property. 
 The function should return a new object where 
the keys are the id values and the values are the corresponding name values.*/

const data =[
    {id : 1, name :"prisca"},
    {id : 2, name :"jean"},
    {id : 3, name :"cara"},
    {id : 4, name : "jojo"},
    {id :5, name : "gabri"}
];
const mapIdToName = (arr)=>{
    const result={};
    for (const {id , name} of arr){
        result[id]=name;
    }
    return result;
}
const mapped =mapIdToName(data);
console.log(mapped);