// Fetching data from a fake API

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post =>{
        console.log("post title:",post.title);
    })
    .catch(error =>{
        console.error("failed to fetch post",error);
    });