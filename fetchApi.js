const fetchAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("API data Fetched successfully")
        }, 2400)
    })
}

const showAPIData = async () => {
    console.log("Calling API...");
    const apiData = await fetchAPI();
    console.log(apiData);
}

showAPIData()