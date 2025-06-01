/* Concept: Understanding promises vs callbacks
You are given a callback-based function that simulates fetching user data. Your task is to create an equivalent function that uses Promises instead of callbacks. The new function should handle both success and error cases properly, maintaining the same timing and error conditions as the original.
Convert this callback-based function to return a Promise:
function fetchUserCallback(userId, callback) {
  setTimeout(() => {
    if (userId > 0) {
      callback(null, { id: userId, name: 'John' });
    } else {
      callback(new Error('Invalid user ID'));
    }
  }, 1000);
}

// Convert to:
function fetchUserPromise(userId) {
  // Your implementation here
}

// Should work like:
// fetchUserPromise(1).then(user => console.log(user));
// fetchUserPromise(-1).catch(err => console.log(err.message));*/

function fetchUserPromise(userId) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (userId > 0){
                resolve({id: userId,name: "Prisca"
                });
            }else{
                reject(new Error("Invalid user ID"));
            }
        },1000);
    }); 
}
fetchUserPromise(1)
.then(user => console.log(user))
.catch(err =>console.log(err.message));