// A basic syntax of fetch()
// this is a browser built in API used to make HTTP requests

fetch(url,option)
    .then(response =>response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(error =>{
        console.error("error message",error);
    });