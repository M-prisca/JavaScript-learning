// Concept: Error Handling with async/await
// The following function attempts to fetch user data and display the user's name in uppercase. 
// However, it has several potential failure points that are not properly handled. 
// Your task is to rewrite this function to gracefully handle all possible errors including network failures, 
// JSON parsing errors, missing user data, and missing properties.
//  The function should never crash and should provide meaningful error messages or fallback values.
// Fix the error handling in this function:
// async function getUserData(userId) {
//   const user = await fetch(`/api/users/${userId}`);
//   const userData = await user.json();
//   console.log(userData.name.toUpperCase()); // What if name is undefined?
//   return userData;
// }

// // Rewrite to properly handle:
// // - Network errors
// // - JSON parsing errors
// // - Missing user data
// // - Missing name property


async function getUserData(userId){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let userData;
        
        try{
            userData = await response.json();
        }catch(jsonError){
            throw new Error ('Failed to parse user data');
        }
        
        if (!userData || typeof userData.name !== 'string'){
            console.log ('Warning: Name nof found. Using fallback value.');
            userdata={...userData,name:'Unknown'};
        }
        console.log(userData.name.toUpperCase());
        return userData;
        
    }catch (error){
        console.error('An error occurred while while fetching user data:', error.message);
        return null;
        
    }
}
getUserData(2)
.then (user =>{
    if (user){
        console.log('User data receives successfully.')
    }else{
        console.log('No user data returned.')
    }
});