// Imagine you are developing a real-time news application, and you need to fetch posts 
// from three different sources to provide users with the latest updates.
// The API endpoints for getting posts are:
// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts
// To ensure a seamless user experience, you are supposed to create a function called getFastPosts 
// that fetches posts from these endpoints simultaneously (concurrently) and 
// only presents data from the source that responds the quickest, while ignoring slower or 
// potentially unreliable sources.
// Example of how the function should be used
// // getFastPosts() code here...
// getFastPosts().then((posts) => {
//     console.log(posts)
// })

async function getFastPosts() {
    const urls = [
        'https://dummyjson.com/posts',
        'https://this-may-not-exist.com/posts',  // This might fail
        'https://jsonplaceholder.typicode.com/posts'
    ];

    // Wrap each fetch + json parsing in a promise
    const fetchPromises = urls.map(url =>
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`Error fetching ${url}`);
                return res.json();
            })
    );

    try {
        const fastestPosts = await Promise.race(fetchPromises);
        return fastestPosts;
    } catch (error) {
        console.error("All fetches failed or fastest one errored:", error);
        return null;
    }
}

getFastPosts().then(posts => {
    console.log(posts);
});
