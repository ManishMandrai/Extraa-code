// Array
const fruits = ["Apple", "Banana", "Mango"];
const [fruit1, fruit2] = fruits;

console.log(fruit1);
console.log(fruit2);


// Object
const person = { name: "Manish", age: 23 }
const { name, age } = person;
console.log(name);
console.log(age);


//Spread
const arr1 = [1, 2, 3]
const arr2 = [6, 7, 9]
const mergedArraay = [...arr1, ...arr2];
console.log(mergedArraay);

const obj1 = { name: "jhon" }
const obj2 = { age: 34 }
const newObj = { ...obj1, ...obj2 }
console.log(newObj);


// Rest
const [first, ...rest] = [10, 20, 30, 40, 60, 304]
console.log(first);
console.log(...rest);


//Template Literals
const namee = "manish"
const agee = 23;
console.log(`Hello my name is ${namee} and I am ${agee} years old`);


//Promises 
const fetchData = (isSuccess) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) resolve("Data fatched")
                else reject('failed to fetch data')
        }, 2000)
    })
}
fetchData(true)
    .then(data => console.log(data))
    .catch(error => console.log(error))


// Async/Await
const fetchData = async () => {
    try{
        const data = await new Promise((resolve) =>
        setTimeout(() => resolve("100% Data fatched!!"), 3000)
        )
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchData()
