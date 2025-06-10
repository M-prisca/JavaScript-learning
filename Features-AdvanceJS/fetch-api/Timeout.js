// Implement a timeout for an asynchronous fetch request. 
// If the request takes longer than(5 milliseconds), it should be aborted.

// https://jsonplaceholder.typicode.com/users

const url ="https://jsonplaceholder.typicode.com/users";
const controller = new AbortController();
const timeout = 5000;

const timeoutId = setTimeout(()=>{
    controller.abort();
    console.log("The fetch was aborted");
}, timeout);

fetch(url, {signal: controller.signal})
    .then ((Response)=>{
        clearTimeout(timeoutId);
        if(!Response.ok){
            throw new Error("network response was not ok");
        }
        return Response.json();
    })
    .then((data) =>{
        console.log("data fetched", data);
    })
    .catch((error) =>{
        if (error.name ==="AbortError"){
            console.error("Fetch was aborted");
        }else{
            console.error("fetch Failed", error.message);
        }
    })