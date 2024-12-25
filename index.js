// const promise = new Promise((resolve, rejecct) => {
//     let success = true;
    
//     if(success) {
//         resolve("Kaam ho gya")
//     }else{
//         rejecr("error aaaya")
//     }
// })

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))



// const fetchData = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data revevied!!!")
//         }, 4000)
//     })
// }

// fetchData()
//     .then (data => console.log(data))
//     .catch (error => console.log(error))


// const getData = async () => {
//     console.log("fetching data");
//     const data = await fetchData()
//     console.log(data);
    
// }
// getData()


const fetchData = () => {
    return new Promise ((resolve, reject) => {
        const success = false;
        setTimeout(() => {
            if (success){
                resolve("Data recived!!")
            }else{
                reject("Error detedted!!")
            }
        }, 3000)
    })
}

const getData = async () => {
    try {
        console.log("fetching data...");
        const data = await fetchData()
        console.log(data);    
    }catch(error){
        console.log(error);
    }
};


getData()
