// Write a JavaScript program that simulates loading data asynchronously.
// Create a function getData that returns a Promise, which resolves with the string "Data loaded" after a 2-second delay.
// Then, create an async function loadData that waits for the Promise to resolve using await, and logs the result to the console.
// Finally, call the loadData function.

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
};

async function loadData() {
  const result = await getData(); // pauses until getData() is resolved
  console.log(result);
}

loadData();