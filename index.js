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



const fetchData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Data revevied!")
        }, 4000)
    })
}

fetchData()
    .then (data => console.log(data))
    .catch (error => console.log(error))
