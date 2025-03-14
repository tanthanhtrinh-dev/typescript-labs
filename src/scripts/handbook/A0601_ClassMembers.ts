class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Employee {

    public name: string;  // Can be accessed anywhere
    private salary: number;  // Can only be accessed inside the class
    protected department: string;  // Accessible in subclasses

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary(): number {
        return this.salary; // ✅ Allowed inside the class
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }

    getDepartment(): string {
        return this.department; // ✅ Allowed inside subclass
    }
}

class Car {
    readonly brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
}

class BankAccount {
    private _balance: number = 0;

    get balance(): number {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this._balance = amount;
    }
}

//6. Static Properties and Methods (static)
class MathUtils {
    static PI: number = 3.1416;

    static circleArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

class Animal {
    constructor(public name: string) { }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

abstract class Shape {
    constructor(public color: string) { }

    abstract getArea(): number; // Must be implemented in subclasses
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string) {
        console.log(`LOG: ${message}`);
    }
}


export class ClassExample {

    /**
     * 
     */
    static SimpleExample = () => {
        const alice = new Person("Alice", 25);
        console.log(alice.greet()); // ✅ Hello, my name is Alice and I am 25 years old.
    }


    /**
     * 
     */
    static AccessModifiersExample = () => {

        const emp = new Employee("Alice", 50000, "HR");
        console.log(emp.name); // ✅ "Alice"
        // console.log(emp.salary); // ❌ Error: Property 'salary' is private
        // console.log(emp.department); // ❌ Error: Property 'department' is protected
    }

    /**
     * Readonly Properties
     */
    static ReadonlyPropertiesExample = () => {

        const myCar = new Car("Toyota");
        //myCar.brand = "Honda"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property

    }


    /**
     * Accessor Properties
     */
    static AccessorPropertiesExample = () => {
        const account = new BankAccount();
        account.balance = 1000; // ✅ Setting value via setter
        console.log(account.balance); // ✅ Getting value via getter
        // account.balance = -500; // ❌ Error: Balance cannot be negative
    }

    /**
     * Static Properties and Methods
     */
    static StaticPropertiesAndMethodsExample = () => {
        console.log(MathUtils.PI); // ✅ 3.1416
        console.log(MathUtils.circleArea(5)); // ✅ 78.54
    }

    /**
     * Inheritance
     */
    static InheritanceExample = () => {

        const myDog = new Dog("Buddy", "Golden Retriever");
        myDog.speak(); // ✅ "Buddy barks."            
    }

    /**
     * Abstract Classes
     */
    static AbstractClassesExample = () => {

        const circle = new Circle("red", 10);
        console.log(circle.getArea()); // ✅ 314.16
        // const shape = new Shape("blue"); // ❌ Error: Cannot instantiate abstract class

    }

}

