// "Write a function that simulates fetching a user by ID using a callback. If the ID is greater than 0, 
// return a user object after 1 second; otherwise, return an error. Then, 
// call the function with an invalid ID and log the appropriate message."

function fetchUserCallback(userId, callback) {
  setTimeout(() => {
    if (userId > 0) {
      const user = { id: userId, name: "John Doe" };
      callback(null, user);
    } else {
      const error = new Error("Invalid user ID");
      callback(error, null);
    }
  }, 1000);
}

fetchUserCallback(1, (error, user) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(user);
  }
});