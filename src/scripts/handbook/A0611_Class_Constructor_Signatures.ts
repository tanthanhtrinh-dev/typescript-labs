
//Constructor Signature in Interfaces
interface UserConstructor {
    new(name: string, age: number): User5;
}

class User5 {
    constructor(public name: string, public age: number) { }
}

const createUser = (Ctor: UserConstructor): User5 => {
    return new Ctor("Alice", 25);
};

//Using Constructor Signatures in Abstract Classes
abstract class Shape {
    constructor(public color: string) { }
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Constructor Signature with Generics
interface Constructor<T> {
    new(...args: any[]): T;
}

function createInstance<T>(Ctor: Constructor<T>, ...args: any[]): T {
    return new Ctor(...args);
}

class Product {
    constructor(public id: number, public name: string) { }
}

//Enforcing Constructor Parameters
interface LoggerConstructor {
    new(level: "info" | "warn" | "error"): Logger;
}

class Logger {
    constructor(public level: "info" | "warn" | "error") { }

    log(message: string) {
        console.log(`[${this.level.toUpperCase()}]: ${message}`);
    }
}

//Constructor Signature in Factory Functions

interface AnimalConstructor {
    new(name: string): Animal;
}

class Animal {
    constructor(public name: string) { }
}

function createAnimal(Ctor: AnimalConstructor, name: string): Animal {
    return new Ctor(name);
}

//Constructor Signature with `typeof`

class Car {
    constructor(public brand: string, public year: number) { }
}

type CarConstructor = typeof Car; // Extracts constructor type


export class ConstructorSignature {

    static Sample() {
        const user = createUser(User5);
        console.log(user.name); // ✅ "Alice"
    }

    /**
     * Ensures all shapes have a color property.
     * Forces subclasses (Circle) to implement getArea().
     */
    static UsingConstructorSignaturesInAbstractClasses() {
        const circle = new Circle("red", 10);
        console.log(circle.getArea()); // ✅ 314.16
    }

    /**
     * Allows any class type to be instantiated dynamically.
     * Ensures type safety for the returned instance.
     */
    static UsingConstructorSignatureWithGenerics() {
        const product = createInstance(Product, 101, "Laptop");
        console.log(product.name); // ✅ "Laptop"
    }

    static UsingEnforcingConstructorParameters() {
        // const createLogger = (Ctor: LoggerConstructor): Logger => {
        //     return new Ctor("info");
        // };
        // const logger = createLogger(Logger);
        // logger.log("System running..."); // ✅ "[INFO]: System running..."
        // //logger.level
        const createLoggerError = (Ctor: LoggerConstructor, level: "info" | "warn" | "error"): Logger => {
            return new Ctor(level);
        };
        const loggerError = createLoggerError(Logger, "error");
        loggerError.log("System running..."); // ✅ "[INFO]: System running..."
        //logger.level
    }

    static UsingConstructorSignatureInFactoryFunctions() {
        const dog = createAnimal(Animal, "Buddy");
        console.log(dog.name); // ✅ "Buddy"
    }


    static UsingConstructorSignatureWithTypeOf() {
        
        const carClass: CarConstructor = Car;
        const myCar = new carClass("Toyota", 2022);

        console.log(myCar.brand); // ✅ "Toyota"

    }
}