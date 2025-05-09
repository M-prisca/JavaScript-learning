/*Question:
Write a function processData that takes an array of objects as input. Each object represents a student with the following properties:

name: A string representing the student's name.
scores: An array of numbers representing the student's scores.
Your task is to:

1.Filter the students whose average score is below 50.
For the remaining students:
2.Sort them by their average score in descending order.
3.Add a new property grade based on their average score:
"A" if the average score is 90 or above.
"B" if the average score is between 80 and 89.
"C" if the average score is between 70 and 79.
"D" if the average score is between 60 and 69.
"F" if the average score is below 60.
4.Return the modified array of students, with their grade included, sorted by their average score.
*/


const students =[
    {name :"Prisca",scores: [10,20,30]},
    {name:"Uweara", scores:[43,23,65]},
    {name :"Masereli", scores:[89,90,89]},
    {name : "Oscar", scores:[100,100,100]},
    {name :"Dina", scores:[50,50,50]},
    {name:"djodjo",scores:[79,23,43]},
    {name :"pika", scores:[89,43,54]}
];
function processData(students){
    const calculateAverage =(scores)=>{
        const total =scores.reduce((sum,score)=>sum+scores,0);
        return total/scores.length;
    };
    const filteredStudents=students.filter(students=>{
        const average=calculateAverage(students.scores);
        return average>=50;
    });
    con
};