// A follow-up question to the challenge 1, which prompt me to rewrite the question using the anonymous function.

function greet(name,callback){
    console.log("Hello "+name+"!");
    callback();
}
greet("Prisca", function(){
    console.log("Goodbye!")
});