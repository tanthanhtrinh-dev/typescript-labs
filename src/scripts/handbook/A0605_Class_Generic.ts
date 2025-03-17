class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

class Pair<K, V> {
    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKeyValue(): string {
        return `${this.key}: ${this.value}`;
    }
}

//4. Generic Constraints (extends)
interface Identifiable {
    id: number;
}

class Entity<T extends Identifiable> {
    entity: T;

    constructor(entity: T) {
        this.entity = entity;
    }

    getId(): number {
        return this.entity.id;
    }
}

//5. Generic Static Properties and Methods
class Utility<T> {

    static defaultName: string = "Generic Utility";

    static printMessage<U>(message: U): void {
        console.log(message);
    }
}

//6. Extending a Generic Class
class Collection<T> {
    protected items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

class NumberCollection extends Collection<number> {
    sum(): number {
        return this.items.reduce((acc, num) => acc + num, 0);
    }
}

//7. Generic Interfaces with Classes
interface Repository<T> {
    getById(id: number): T;
    save(entity: T): void;
}

class UserRepository implements Repository<{ id: number; name: string }> {
    private users: { id: number; name: string }[] = [];

    getById(id: number) {
        return this.users.find(user => user.id === id)!;
    }

    save(user: { id: number; name: string }) {
        this.users.push(user);
    }
}

//8. Generic Classes with Arrow Functions
class Logger<T> {
    log = (message: T): void => {
        console.log(`[LOG]:`, message);
    };
}

//Avoiding this Issues with Arrow Functions
class EventHandler {
    message = "Event Triggered!";

    /**
     * Problem: Losing this in Callbacks
     */
    handle() {
        console.log(this.message);
    }

    /**
     * Solution: Use an Arrow Function
     * Why does this work?
     * Arrow functions capture `this` from their surrounding scope.
     * `handle = () => {}` ensures `this.message` is always available.
     */
    handleFix = () => {
        console.log(this.message);
    }
}

//Arrow Functions in Generic Methods
class Transformer<T> {
    transform = <U>(input: T, converter: (value: T) => U): U => {
        return converter(input);
    };
}

//Using Arrow Functions in Generic Callbacks
class DataProcessor<T> {
    process = (data: T[], callback: (item: T) => void): void => {
        data.forEach(callback);
    };
}

export class GenericClassExample {

    constructor() {
        console.log("GenericClassExample constructor");
    }

    static Sample = () => {

        const stringBox = new Box<string>("Hello");
        console.log(stringBox.getItem()); // ✅ "Hello"

        const numberBox = new Box<number>(42);
        console.log(numberBox.getItem()); // ✅ 42
    }

    static MultipleType = () => {

        const pair1 = new Pair<string, number>("Age", 30);
        console.log(pair1.getKeyValue()); // ✅ "Age: 30"

        const pair2 = new Pair<number, boolean>(1, true);
        console.log(pair2.getKeyValue()); // ✅ "1: true"
    }

    static GenericConstraint = () => {
        const user = new Entity({ id: 1, name: "Alice" });
        console.log(user.getId()); // ✅ 1
    }

    static StaticProperties = () => {
        console.log(Utility.defaultName); // ✅ "Generic Utility"
        Utility.printMessage<number>(100); // ✅ 100        
    }

    static ExtendingGenericClass = () => {
        const numbers = new NumberCollection();
        numbers.addItem(10);
        numbers.addItem(20);
        console.log(numbers.sum()); // ✅ 30
    }

    static GenericInterfaces = () => {
        const userRepo = new UserRepository();
        userRepo.save({ id: 1, name: "Alice" });
        const user = userRepo.getById(1);
        console.info(user); // ✅ { id: 1, name: "Alice" }
    }

    static GenericArrowFunctions = () => {

        const stringLogger = new Logger<string>();
        stringLogger.log("Hello, TypeScript!"); // ✅ [LOG]: Hello, TypeScript!

        const numberLogger = new Logger<number>();
        numberLogger.log(42); // ✅ [LOG]: 42

    }

    //Problem: Losing this in Callbacks
    static AvoidingThisIssues = () => {
        const handler = new EventHandler();
        //setTimeout(handler.handle, 1000); // ❌ Error: 'this.message' is undefined
        setTimeout(handler.handleFix, 1000); // ✅ "Event Triggered!"
    }

    static ArrowFunctionsInGenericMethods = () => {
        const stringTransformer = new Transformer<string>();
        const result = stringTransformer.transform<number>("123", (val) => parseInt(val));
        console.log(result); // ✅ 123 (as number)
    }

    static ArrowFunctionsInGenericCallbacks = () => {
        const processor = new DataProcessor<number>();
        processor.process([1, 2, 3], (num) => console.log(num * 2)); 
    }

}