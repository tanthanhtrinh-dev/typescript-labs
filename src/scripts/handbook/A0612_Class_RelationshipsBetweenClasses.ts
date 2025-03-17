class Animal {
    constructor(public name: string) { }

    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
//Composition (Has-A Relationship)
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks: Woof! 🐶`);
    }
}

//Composition (`Has-A` Relationship)
class Engine {
    start() {
        console.log("Engine started 🚗");
    }
}

class Car {
    private engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    drive() {
        this.engine.start();
        console.log("Car is driving!");
    }
}

//Interfaces (implements) – "Can-Do" Relationship

interface Flyable {
    fly(): void;
}

class Bird implements Flyable {
    fly() {
        console.log("The bird is flying! 🐦");
    }
}

//Abstract Classes (extends abstract)
abstract class Employee {
    constructor(public name: string) {}

    abstract getSalary(): number; // Must be implemented by subclasses

    getInfo() {
        return `Employee: ${this.name}`;
    }
}

class Developer extends Employee {
    constructor(name: string, private salary: number) {
        super(name);
    }

    getSalary(): number {
        return this.salary;
    }
}

//Dependency Injection (DI) – Dynamic Relationship

class Logger {
    log(message: string) {
        console.log(`LOG: ${message}`);
    }
}

class App {
    constructor(private logger: Logger) {}

    run() {
        this.logger.log("Application started!");
    }
}



export class RelationshipsBetweenClasses {

    static Simple() {

        const myDog = new Dog("Buddy");
        myDog.makeSound(); // ✅ "Buddy makes a sound"
        myDog.bark(); // ✅ "Buddy barks: Woof!"
    }

    static CompositionHasA_Relationship() {
        const myCar = new Car();
        myCar.drive();
        // ✅ "Engine started 🚗"
        // ✅ "Car is driving!"
    }

    static InterfacesRelationship() 
    {
        const sparrow = new Bird();
        sparrow.fly(); // ✅ "The bird is flying!"
    }

    //Abstract Classes `(extends abstract)`
    static AbstractClasses()
    {
        const dev = new Developer("Alice", 5000);
        console.log(dev.getInfo()); // ✅ "Employee: Alice"
        console.log(dev.getSalary()); // ✅ 5000
    }

    //Dependency Injection (DI)
    static DependencyInjection(){
        const logger = new Logger();
        const app = new App(logger);
        app.run(); // ✅ "LOG: Application started!"
    }

}