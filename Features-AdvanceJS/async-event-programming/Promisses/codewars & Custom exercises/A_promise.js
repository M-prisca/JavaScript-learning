function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched successfully!";
    callback(null, data); // Simulating success
  }, 1000);
}

function getDataPromise(fetchData){
    return new Promise((resolve,reject) =>{
        fetchData((error,data)=>{
            if (error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    });
}
getDataPromise(fetchData)
.then(data=>{
    console.log("Promise resolve:",data);
})
.catch(error =>{
    console.error("failed to fetch data",error);
})