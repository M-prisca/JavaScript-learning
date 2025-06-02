// Concept: Understanding when operations run in parallel vs series
// You need to understand the difference between running asynchronous operations 
// one after another (sequential) versus running them at the same time (concurrent).
//  Create two different implementations that demonstrate this timing difference.
//  One should wait for each task to complete before starting the next,
//  while the other should start all tasks simultaneously and wait for all to complete.
// You have three async functions that each take 1 second. Write two versions:
// async function taskA() { /* takes 1 second */ }
// async function taskB() { /* takes 1 second */ }
// async function taskC() { /* takes 1 second */ }

// // Version 1: Run sequentially (should take ~3 seconds)
// function runSequential() {
//   // Your implementation
// }

// // Version 2: Run concurrently (should take ~1 second)
// function runConcurrent() {
//   // Your implementation
// }


async function taskA(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("task 1 done.");
            resolve ("A");
        },1000);
    });
}

async function taskB(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Task 2 done..");
            resolve("B")
        },1000);
    });
}

async function taskC(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Task C done...");
            resolve("C")
        },1000);
    });
}
async function runSequential(){
    console.time("Sequential");
    await taskA();
    await taskB();
    await taskC();
    console.timeEnd("Sequential");
}

async function runConcurrent(){
    console.time("Concurrent");
    await Promise.all([taskA(), taskB(),taskC()]);
    console.timeEnd("Concurrent");
}

runSequential().then(()=> runConcurrent());
