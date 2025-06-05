// Create a countDownFrom(n) function that:
// Accepts any number n
// Logs from n to 1, one number every second
// Ends with " Done!"

function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function countDownFrom(n){
    let promise = Promise.resolve();
    
    for (let i = n; i>= 1; i--){
        promise =promise.then(()=>{
            console.log(i);
            return wait(1000);
        });
    }
    promise.then(()=>{
        console.log("Done!")
    })
}
countDownFrom(1);