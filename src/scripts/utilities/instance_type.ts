
/**
 * 
 */
class User {
    constructor(public name: string, public age: number) {}
}

/**
 * 
 */
export class InstanceTypeExample {

    /**
     * Basic Example: Extracting Instance Type from a Class
     * Why use InstanceType<T>?
     * Ensures objects conform to the correct instance structure.
     * Avoids manually duplicating type definitions.
     */
    static Sample(){        
        type UserInstance = InstanceType<typeof User>;
        const user: UserInstance = new User("Alice", 30); // ✅ Works
        // const invalidUser: UserInstance = { name: "Bob" }; // ❌ Error: 'age' is missing
    }

    /**
     * Using `InstanceType<T>` in Factory Functions
     * `InstanceType<T>` ensures factories return the correct instance type.
     * 
     * Example: Creating Class Instances Dynamically
     * 
     * Why use InstanceType<T> here?
     * - Ensures factory functions return valid class instances.
     */
    static InstanceTypeFactoryFunctions(){

        function createInstance<T extends new (...args: any) => any>(
            ClassType: T,
            ...args: ConstructorParameters<T>
        ): InstanceType<T> {
            return new ClassType(...args);
        }
        
        const user = createInstance(User, "Charlie", 25); // ✅ Works        
    }

    /**
     * Using `InstanceType<T>` in Dependency Injection
     * 
     * When using Dependency Injection (DI), `InstanceType<T>` helps enforce valid service instances.
     * 
     * Example: Type-Safe Service Injection
     * 
     * Why use `InstanceType<T>` here?
     * - Ensures correct service instances are injected.
     */
    static InstanceTypeDependencyInjection(){

        class Logger {
            log(message: string) {
                console.log("LOG:", message);
            }
        }
        
        class Service {
            constructor(private logger: Logger) {}
        
            run() {
                this.logger.log("Service is running");
            }
        }
        
        type ServiceInstance = InstanceType<typeof Service>;
        
        function initializeService(logger: InstanceType<typeof Logger>): ServiceInstance {
            return new Service(logger);
        }
        
        const logger = new Logger();
        const service = initializeService(logger);
        service.run(); // ✅ "LOG: Service is running"        
    }

    /**
     * `InstanceType<T>` with Abstract Classes
     * 
     * It works with abstract classes too.
     * 
     * Example: Enforcing Abstract Class Instances
     * 
     * Why use this?
     * - Ensures the instance adheres to the abstract class definition.
     */
    static InstanceTypeAbstractClasses(){
        abstract class Animal {
            constructor(public species: string) {}
        
            abstract makeSound(): void;
        }
        
        class Dog extends Animal {
            makeSound() {
                console.log("Woof! 🐶");
            }
        }
        
        type AnimalInstance = InstanceType<typeof Dog>;
        
        const pet: AnimalInstance = new Dog("Bulldog");
        pet.makeSound(); // ✅ "Woof! 🐶"
        
    }

    /**
     * Using InstanceType<T> for Singleton Classes
     * 
     * Singletons ensure only one instance of a class is created.
     * 
     * **Example:** Enforcing Singleton Type
     * 
     * Why use InstanceType<T> here?
     * - Ensures type safety when returning the singleton instance.
     */
    static InstanceTypeSingletonClasses(){

        //type DBInstance = InstanceType<typeof Database>;

        class Database {
            
            private static instance: Database;
        
            private constructor() {}                  
            
            static getInstance(): Database {
                if (!this.instance) {
                    this.instance = new Database();
                }
                return this.instance;
            }
        }
        
        const db1 = Database.getInstance();
        const db2 = Database.getInstance();
        console.log(db1 === db2); // ✅ true (same instance)        
    }

    /**
     * Real-World Example: Managing Database Connections
     * Why use InstanceType<T> here?
     * Ensures the function returns a valid database instance.
     */
    static InstanceTypeRealWorld(){

        class DatabaseConnection {
            constructor(public host: string, public port: number) {}
        
            connect() {
                console.log(`Connecting to ${this.host}:${this.port}`);
            }
        }
        
        type DBInstance = InstanceType<typeof DatabaseConnection>;
        
        function createDatabaseConnection(...args: ConstructorParameters<typeof DatabaseConnection>): DBInstance {
            return new DatabaseConnection(...args);
        }
        
        const db = createDatabaseConnection("localhost", 5432);
        db.connect(); // ✅ "Connecting to localhost:5432"
        
    }


}