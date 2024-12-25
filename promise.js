const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Waited of ${seconds} seconds`)
        },seconds * 1000)
    })
}
delay(4).then(message => console.log(message))


const fetchUser = (id) => {
    return new Promise ((resolve, reject) => {
        if(id === 1){
            resolve({id:1, name: "Manish"})
        }else{
            reject("user not found")
        }
    })
}

fetchUser(1)
    .then(user => console.log(user))
    .catch(error => console.log(error))


const step1 = () => {
    return new Promise(reslove => reslove("step 1 complete"));
}
const step2 = () => {
    return new Promise(resolve => resolve("step 2 complete"))
}

step1()
    .then(result => {
        console.log(result);
        return step2()
    })
    .then(result => console.log(result))