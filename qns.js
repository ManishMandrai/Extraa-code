//Qn1. Write a function fetchData that simulates an API call with a delay of 2 seconds. If the input is true, the promise should resolve with "Data fetched successfully". If the input is false, it should reject with "Error fetching data".

const fetchData = (isSuccess) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isSuccess){
                resolve("Data fatched succwssfully")
            }else {
                reject("Error fatchiing data")
            }
        }, 3000)
    })
}

fetchData(true)
    .then(data => console.log(data))
    .catch(error => console.log(error))


//Qn2. Write an async function fetchSequentially that calls two functions fetchUser and fetchPosts sequentially.
// fetchUser: Returns "User fetched" after 1 second.
// fetchPosts: Returns "Posts fetched" after 2 seconds

const fetchUser = async () => {
    return new Promise(resolve => setTimeout(()=> resolve("user fatched"), 2000))
};
const fetchPosts = async () => {
    return new Promise(resolve => setTimeout (() => resolve("posts fetched"), 5000))
}

const fetchSequentially = async () => {
    const user = await fetchUser();
    console.log(user);

    const posts = await fetchPosts();
    console.log(posts);
}
fetchSequentially();

//Qn3. Modify the previous example to fetch user and posts data in parallel using Promise.all.

const fetchParallel = async () => {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()])
    console.log(user);
    console.log(posts);
}

fetchParallel()

//Qn4.  Create a function fetchWithErrorHandling that calls fetchData (from question 1) using async/await and handles errors with a try-catch block.
const fetchWithErrorHandling = async(isSuccess) => {
    try{
        const data = await fetchData(isSuccess);
        console.log(data);        
    }catch(error){
        console.log(error);
    }
}

fetchWithErrorHandling(false)


//Qn5 . Create an async function simulateFetch that returns a response object with { status: 200, data: "Response received" } after 3 seconds. Log the data if the status is 200.

const  simulateFetch = async () => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve({status : 200, data : "response recived!"})
        }, 3000)
    })
}
const handleFetch = async () => {
    const response = await simulateFetch();
    if(response.status === 200){
        console.log(response.data);
    }
}

handleFetch()

//Qn6. Write a function retryPromise that retries a failed promise 3 times before rejecting. Use fetchData (from question 1).


const fetchData = (isSuccess) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isSuccess){
                resolve("Data fatched succwssfully")
            }else {
                reject("Error fatchiing data")
            }
        },2000)
    })
}

const retryPromise = async(isSuccess, retiers) => {
    for (let i = 0; i < retiers; i++){
        try{
            const data = await fetchData(isSuccess);
            console.log(data);
            return
        }catch(error){
            console.log(`Attempt ${i+1} failed`);

        }
    }
    console.log("All promise failed");
}

retryPromise(false, 3)


// Qn7. Simulate fetching user details and their posts using two async functions:
// getUserDetails: Returns { id: 1, name: "John Doe" } after 1 second.
// getUserPosts: Returns an array of post titles after 2 seconds.

const getUserDetails = async () => {
    return new Promise(reslove => {
        setTimeout(() => reslove({ id: 1, name: "Jhon Doe" }), 1500);
    });
};
const getUserPosts = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 3000)
    })
}

const fetchUserAndPosts = async () => {
    const user = await getUserDetails();
    console.log("User: ", user);

    const posts = await getUserPosts();
    console.log("posts: ", posts);

}

fetchUserAndPosts();


//Qn8. Create a function wait that pauses execution for a given number of seconds using async/await.

const wait = (seconds) => {
    return new Promise (resolve => setTimeout(resolve,seconds * 1000));
};
const pauseExecuation = async() => {
    console.log("Waiting...");
    await wait(3)
    console.log("3 secod passed");
    
}

pauseExecuation();