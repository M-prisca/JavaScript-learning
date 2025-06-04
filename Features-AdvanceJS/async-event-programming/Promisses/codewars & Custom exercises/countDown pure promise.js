// Callback Hell Challenge written in a pure Promise using .then()
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
    return new Promise(resolve=> setTimeout(resolve,ms));
}
function countDown(){
    console.log("countdounw:");
    wait(1000)
    .then(()=>{
        console.log("5");
        return wait(1000);
    })
    .then(()=>{
        console.log("4");
        return wait(1000);
    })
    .then(()=>{
        console.log("3");
        return wait(2000);
    })
    .then(()=>{
        console.log("2");
        return wait(1000);
    })
    .then(()=>{
        console.log("1");
        return wait(1000);
    })
    .then(()=>{
        console.log("Happy Coding!")
    })
}
countDown();