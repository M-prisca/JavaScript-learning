// /Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.

// Users endpoints https://jsonplaceholder.typicode.com/users
// Todos endpoints https://jsonplaceholder.typicode.com/todos

// The returned promise should resolve into an array of users, where each user object has a new key todos. This key shoul
// // User object may look like
// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   ...
// }

// // Todo object may look like
// {
//     userId: 5,
//   completed: false,
//     ...
// }

// // The result array will have objects that look like

// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   todos: [
//         {
//             userId: 10,
//           completed: false,
//             ...
//         },
//         {
//             userId: 10,
//           completed: false,
//             ...
//         }
//     ]
//     ...
// }/


async function fetchUserTodos() {
    const userUrls='https://jsonplaceholder.typicode.com/users';
    const todosUrls='https://jsonplaceholder.typicode.com/todos';

    return Promise.all([
        fetch(userUrls).then(Response=> Response.json()),
        fetch(todosUrls).then(Response => Response.json())
    ])
    .then(([users, todos]) =>{
        const combined = users.map(user =>{
            const userTodos =todos.filter(todo => todo.userId === user.id);
            return{
                ...user,
                todos: userTodos
            };
        });
        return combined;
    })
    .catch(error =>{
        console.error("Error fetching data:",error);
        throw error;
    });
}
fetchUserTodos()
    .then(result => console.log(JSON.stringify(result, null, 2)))
    .catch(err => console.error("Failed to fetch user todos", err));