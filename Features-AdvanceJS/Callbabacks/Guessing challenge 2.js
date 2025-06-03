//What will be the output of this code, and in what order will the lines be printed?

console.log("Start");

setTimeout(function() {
  console.log("Inside setTimeout");
}, 0);

console.log("End");

//The output will be:

//Start
//End
//Inside setTimeout


// Even though setTimeout(..., 0) is set to 0 milliseconds, it does not run immediately. Instead:
// console.log("Start") runs synchronously → prints Start.
// setTimeout(..., 0) is scheduled to run after the current call stack is clear.
// console.log("End") runs next → prints End.
// Only after all synchronous code finishes, the callback inside setTimeout runs → prints Inside setTimeout.
// This is because setTimeout is asynchronous and is handled by the browser’s event loop,
//which means it will not block the execution of the code.
//The code will continue to execute while the setTimeout function is waiting for the specified time to elapse. 
//In this case, the specified time is 0 milliseconds, 
//so the setTimeout function will execute immediately after the current code has finished executing. 
//However, since the setTimeout function is asynchronous, it will not block the execution of the code,
//so the "End" message
