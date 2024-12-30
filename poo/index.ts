/**
 * Encapsulation
 * Acces Modifiers 
 * public/private/protected/readonly
 * Getters/Setters
 **/
class Person {
    private name: string;
    private age: number;
    readonly address: {}

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.address= {street: 'my street'}
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

const person = new Person("John Doe", 30);
console.log(person.getName());
 // Output: John Doe
person.setName("Jane Doe");
console.log(person.getName());

/**
 * Abstraction 
 * is implemented using abstract classes and interfaces:
 */

abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea());

/**
 * Inheritance
 * Allow a class to inherit from another class
 * extends keyword is used to inherit from a class
 */

class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters`);
    }

    makeSound(): void {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog Woof!");
    }
}


/**
 * Polymorphism
 * Allow a class to be treated as if it were another class
 * is implemented using method overriding
 */

class Cat extends Animal {
    makeSound(): void {
        console.log("Cat Meow!");
    }
}


const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

function makeAnimalSpeak(animal: Animal): void {
    animal.makeSound();
}

makeAnimalSpeak(dog);
makeAnimalSpeak(cat);

interface Coordinate {
    latitude: number
    longitude: number
    dateCreated?: Date // Properties can also be optional
    calculatePosition?: (latitude: number, longitude: number) => void
}

const coordinate: Coordinate = { latitude: 33, longitude: 40 }