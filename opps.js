function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} yrears old`);
}

const person1 = new Person("MAnis", 23)
person1.greet()

const person2 = new Person("rosjis", 13)
person2.greet()



// class Button {
//     constructor(label){
//         this.label = label;
//     }
//     click(){
//         console.log(`Button ${this.label} clicked`);
//     }
// }
// const btn = new Button ("Submit")
// btn.click()

// const anotherClick = btn.click;
// anotherClick()


class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static miltiply(a, b) {
        return a * b;
    }
}

console.log(MathUtil.add(5, 23));
console.log(MathUtil.miltiply(65, 34));


const userPrototype = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);

    }
}
const user = Object.create(userPrototype);
user.name = "manish"
user.greet()


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    set width(value) {
        if (value <= 0) {
            throw new Error("width must be +ve")
        }
        this._width = value;
    }
    get width() {
        return this._width
    }
}

const rect = new Rectangle(30, 50);
console.log(rect.area)

rect.width = 40;
console.log(rect.area);

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `Name : ${this.name}, Salary : ${this.salary}`
    }
}
class Manager extends Employee {
    constructor(name, salary, branch) {
        super(name, salary);
        this.branch = branch;
    }
    
    getDetails() {
        return `${super.getDetails()}, branch : ${this.branch}`
    }
}

const emp = new Employee("Gikjhg", 23456)
console.log((emp.getDetails()));

const mgr = new Manager("Manisj", 23456, "IT")
console.log(mgr.getDetails());



class Account {
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
        console.log(`Deposited ${amount}, New Balance : ${this.#balance}`);
    }
    
    withdraw(amount){
        if(amount > this.#balance){
            console.log("Insufficient funds");
        }else{
            this.#balance -= amount;
            console.log(`Withdraw : ${amount}, Remaining Balance : ${this.#balance}`);
        }
    }
    getBalance(){
        return this.#balance;
    }
}
const acc = new Account("Ravi", 1000);
acc.deposit(500);
acc.withdraw(5000);
console.log(acc.getBalance());



function Vehicle (type){
    this.type = type;
}
Vehicle.prototype.drive = function (){
    console.log(`Driving a ${this.type}`)
};

function Boat (speed){
    this.speed = speed;
}
Boat.prototype.sail = function () {
    console.log (`Sailing at speed: ${this.speed}`)
}
const hybrid = Object.assign({}, new Vehicle ("Car"), new Boat(50))

hybrid.drive();
hybrid.sail();