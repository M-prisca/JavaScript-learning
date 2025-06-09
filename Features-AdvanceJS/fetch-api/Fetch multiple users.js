// Create an array of URLs
// Use Promise.all() to fetch all users in parallel
// Extract their .json() content
// Log each user's name



async function fetchMultipleUsers() {
  try {
    const userIds = [1, 2, 3];
    const urls = userIds.map(id => `https://jsonplaceholder.typicode.com/users/${id}`);

    // Step 1: Fetch all responses in parallel
    const responses = await Promise.all(urls.map(url => fetch(url)));

    // Step 2: Convert all responses to JSON
    const users = await Promise.all(responses.map(res => res.json()));

    // Step 3: Log each user's name
    users.forEach(user => {
      console.log(`User: ${user.name}`);
    });
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}

fetchMultipleUsers();
