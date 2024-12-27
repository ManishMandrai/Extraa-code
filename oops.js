class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  }
}
const person1 = new person("Manish", 23);
person1.greet();

class Animal {
  constructor(name) {
    this.name = name;
  }
  sounds() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  sound() {
    console.log(`${this.name} barkss`);
  }
}

const dog = new Dog("Tommy");
dog.sound();


function Person(name){
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
}

const person = new Person("Msanish")
person.greet();


class Car {
    constructor(brand){
        this.brand = brand;
    }
    showBrand(){
        console.log(`This car is a ${this .brand}`)
    }
}
const car1 = new Car("lembda");
car1.showBrand();


class Student{
    constructor(name,grade) {
        this.name = name;
        this.grade = grade
    }

    getDetails() {
    return`Syudent : ${this.name}, Grade : ${this.grade}`;
}}
const student1 = new Student("Manis", "A")
const student2 = new Student("Rosshani", "A+")

console.log(student1.getDetails());
console.log(student2.getDetails());



class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`${this.name} makes a sound`);
    }
}
class Cat extends Animal{
    makeSound(){
        console.log(`${this.mows}`);
    }
}

const animal = new Animal("Animal");
animal.makeSound();

const cat = new Cat("Kitty")
cat.makeSound()


function Person (name, age ){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hi I am ${this.name} and i am ${this.age} years old`);
}
const person1 = new Person ("RAhul", 34)
person1.greet()
const person2 = new Person ("Roshani", 22)
person.greet()