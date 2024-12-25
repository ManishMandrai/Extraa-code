const delay = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (`Waited of ${seconds} seconds`)
        },seconds * 1000)
    })
}
delay(2).then(message => console.log(message))


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


const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("data recived !!"), 7000)
    })
}

const loadData = async () => {
    console.log("Loading...");
    const data = await fetchData();
    console.log(data);
}

loadData();

const fetchData = (shouldReject => {
    return new Promise((resolve, reject) => {
        if (shouldReject) {
            reject("Error while fetching data");
        } else {
            resolve("Data fatched successfully!")
        }
    })
})
const getData = async () => {
    try {
        const data = await fetchData(false);
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getData();

const fetchUser = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("user data"), 1000)
    });
};
const fetchPosts = async () => {
    return new Promise (resolve => {
        setTimeout(() => resolve("posts data "),2000)
    })
}

const getData = async () =>{
    console.log(await fetchUser());
    console.log(await fetchPosts());
}

getData()


const fetchUser = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("UserData"), 1000);
    })
}
const fetchPosts = async () => {
    return new Promise(resolve => {
        setTimeout(() =>resolve("Posts Data"), 2000)
    })
}
const getData = async () => {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user);
    console.log(posts);
}

getData()

const fetchData = async () => {
    const response = await new Promise(resolve => {
        setTimeout(() => resolve({status : 200, data:"Fetched Data"}), 1000);
    })
    if (response.status === 200){
        console.log(response.data);
    }else{
        console.log("failed");
    }
}

fetchData()