// Challenge: Fetch a User and Their First Post
// Goal:

// Fetch user data from the API.

// Then fetch the first post written by that user.

// Log the user name and post title.

// 📍 Instructions:
// Use this public API:

// Get user: https://jsonplaceholder.typicode.com/users/1

// Get posts by user: https://jsonplaceholder.typicode.com/posts?userId=1

// Write an async function that:

// Fetches the user
// Fetches all posts by the user
// Logs something like:

// User: Leanne Graham
// First post title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit


async function fetchUserAndPost() {
  try {
    // 1. Fetch user data
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userRes.json();

    // 2. Fetch posts by the user
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const posts = await postsRes.json();

    // 3. Log user name and first post title
    console.log(`User: ${user.name}`);
    console.log(`First post title: ${posts[0].title}`);
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}

fetchUserAndPost();
