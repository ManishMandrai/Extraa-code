const promise = new Promise((resolve, rejecct) => {
    let success = true;
    
    if(success) {
        resolve("Kaam ho gya")
    }else{
        rejecr("error aaaya")
    }
})

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))