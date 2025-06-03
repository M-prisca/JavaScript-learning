// Callback Hell Challenge
// Write JavaScript code using nested setTimeouts to simulate the following countdown:


// Countdown:
// 5
// 4
// 3
// 2
// 1
// Happy Coding!
// Each number should be printed one second apart, ending with the final message.




function countDown(){
    console.log("Countdown:");
    setTimeout(()=>{
        console.log("5");
        setTimeout(()=>{
            console.log("4");
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("2");
                    setTimeout(()=>{
                        console.log("1");
                        setTimeout(()=>{
                            console.log("Happy Coding!")
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
}
countDown();