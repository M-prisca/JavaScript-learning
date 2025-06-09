// fetching data from a fake API with async/await

async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();
    console.log('Post title:', post.title);
  } catch (error) {
    console.error('Failed to fetch post:', error);
  }
}

getPost();
