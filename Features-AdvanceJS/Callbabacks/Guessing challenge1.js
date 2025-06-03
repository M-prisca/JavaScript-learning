// A simple callback function guessing challenge provided by AI to test my basic knowledge about callback functions

function greet (name, callback){
    console.log("Hello "+name+"!");
    callback();
}
function sayBye(){
    console.log("Good bye!");
}
greet("Prisca",sayBye);