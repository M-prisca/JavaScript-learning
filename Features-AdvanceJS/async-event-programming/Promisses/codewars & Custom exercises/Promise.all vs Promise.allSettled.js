// Promise.all vs Promise.allSettled
// Concept: Understanding different Promise combinators
// You need to understand when to use different Promise combination methods. Some scenarios require all operations to succeed or the entire operation fails, while others need to collect results from all operations regardless of individual failures. Implement both approaches to demonstrate the different behaviors and use cases for Promise.all versus Promise.allSettled.
// Given an array of URLs, some of which will fail:
// const urls = [
//   'https://api.example.com/users/1',    // succeeds
//   'https://api.example.com/users/999',  // fails (404)
//   'https://api.example.com/users/2'     // succeeds
// ];

// // Write a function that fetches all URLs and:
// // 1. Stops on first failure (using Promise.all)
// function fetchAllOrFail(urls) {
//   // Your implementation
// }

// // 2. Continues even if some fail (using Promise.allSettled)
// function fetchAllResults(urls) {
//   // Your implementation - return both successes and failures
// }


//1. Promise.all

function fetchAllOrFail(urls) {
    return Promise.all(urls.map(urls => fetch(urls).then(res => {
        if (!res.ok) throw new Error(`Fetch failed: ${url}`);
        return res.json();
    })));
};

const url = ["https://api.examaple.com/users/1", "https://api.examaple.com/users/999", "https://api.examaple.com/users/2"];

fetchAllOrFail(urls)
    .then(results => {
        console.log("All succeeded:", results);
    })
    .catch(error => {
        console.error("Fail:", error.message);
    });

//2. Promise.allSettled


function fetchAllResults(urls) {
    return Promise.allSettled(urls.map(url => fetch(url).then(res => {
        if (!res.ok) throw new Error(`Fetch failed: ${url}`);
        return res.json();
    })));
}
const urls = [
    'https://jsonplaceholder.typicode.com/users/1',    
    'https://jsonplaceholder.typicode.com/users/9999', 
    'https://jsonplaceholder.typicode.com/users/2'     
];


fetchAllResults(urls)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`URL ${urls[index]}: Success`, result.value);
            } else {
                console.log(`URL ${urls[index]}: Failed`, result.reason.message);
            }
        });
    });
