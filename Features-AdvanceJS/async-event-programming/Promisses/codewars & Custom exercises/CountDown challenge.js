// Callback Hell Challenge written in Promises using Async/Await
// Write JavaScript code using nested setTimeouts to simulate the following countdown:


// Countdown:
// 5
// 4
// 3
// 2
// 1
// Happy Coding!
// Each number should be printed one second apart, ending with the final message.



function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function countDown(){
    console.log("Count Down:")
    await wait(1000);
    console.log("5");
    await wait(1000);
    console.log("4");
    await wait(1000);
    console.log("3");
    await wait(1000);
    console.log("2");
    await wait(1000);
    console.log("1")
    await wait(1000);
    console.log("Happy Coding!")
    
}
countDown();