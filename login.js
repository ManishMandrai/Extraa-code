const loginUser = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === "admin" && password === "12345"){
                resolve("Login succcessful!")
            }else{
                reject("Invalid Credentials")
            }
        },1000);
    });
};

const performLogin = async () => {
    try {
        const result = await loginUser("admin", "12345")
        console.log(result);
    }
    catch(error){
        console.log(error);
        
    }

}


performLogin()