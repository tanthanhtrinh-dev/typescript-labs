
/**
 * Represents a user with a name and age.
 */
class User {
    /**
     * Creates an instance of the User class.
     * 
     * @param {string} name - The name of the user.
     * @param {number} age - The age of the user.
     */
    constructor(public name: string, public age: number) {}
}

/**
 * A utility class demonstrating the use of the `ConstructorParameters<T>` utility type in TypeScript.
 * 
 * The `ConstructorParameters<T>` type extracts the parameter types of a class constructor as a tuple.
 * This class provides examples of how to leverage `ConstructorParameters<T>` in various scenarios.
 * 
 * ## Examples
 * 
 * 1. **Basic Example: Extracting Constructor Parameters**
 *    - Demonstrates how to extract and use constructor parameter types for type-safe instantiation.
 * 
 * 2. **Class Factories**
 *    - Shows how to use `ConstructorParameters<T>` to dynamically create class instances with correct parameter types.
 * 
 * 3. **Dependency Injection**
 *    - Illustrates how `ConstructorParameters<T>` can be used to ensure correct dependencies are passed to services.
 * 
 * 4. **Type Guards**
 *    - Explains how to validate constructor arguments dynamically using `ConstructorParameters<T>` in type guards.
 * 
 * ## Why Use `ConstructorParameters<T>`?
 * - Ensures type safety when working with class constructors.
 * - Avoids manual duplication of constructor parameter types.
 * - Improves code maintainability and reduces errors in dynamic scenarios like factories and dependency injection.
 */
class ConstructorParametersExample{
    
    /**
     * Basic Example: Extracting Constructor Parameters
     * 
     * Why use ConstructorParameters<T>?
     * - Ensures correct instantiation of classes.
     * - Avoids manual type duplication.
     */
    static Sample()
    {        
        type UserParams = ConstructorParameters<typeof User>;
        
        const userArgs: UserParams = ["Alice", 30]; // ✅ Works
        // const invalidUserArgs: UserParams = [30, "Alice"]; // ❌ Error: Incorrect order            
    }

    /**
     * Using ConstructorParameters<T> in Class Factories
     * 
     * Class factories dynamically create instances while ensuring correct parameter types.
     * 
     * Example: Dynamic Class Instantiation
     * 
     * Why use this?
     * 
     * Ensures factory functions instantiate classes with correct parameters.
     */
    static ConstructorParametersClassFactories(){
        function createInstance<T extends new (...args: any) => any>(
            ClassType: T,
            ...args: ConstructorParameters<T>
        ) {
            return new ClassType(...args);
        }
        
        const user = createInstance(User, "Bob", 25); // ✅ Works
        // const invalidUser = createInstance(User, 25, "Bob"); // ❌ Error: Wrong argument types        
    }

    /**
     * Using `ConstructorParameters<T>` for Dependency Injection
     * 
     * Dependency Injection (DI) benefits from extracting constructor argument types.
     * 
     * Example: Ensuring Correct Dependencies
     * 
     * Why use this?
     * - Ensures services receive correct dependencies at runtime.
     * - Improves testability and modularity.
     */
    static ConstructorParametersDependencyInjection()
    {
        class Logger {
            log(message: string) {
                console.log("LOG:", message);
            }
        }
        
        class Service {

            constructor(private logger: Logger, private serviceName: string) {}
        
            run() {
                this.logger.log(`Service ${this.serviceName} is running`);
            }
        }
        
        type ServiceParams = ConstructorParameters<typeof Service>;
        
        function initializeService(...args: ServiceParams) {
            return new Service(...args);
        }
        
        const logger = new Logger();
        const service = initializeService(logger, "UserService");
        service.run(); // ✅ "LOG: Service UserService is running"
        
    }

    /***
     * `ConstructorParameters<T>` in Type Guards
     * 
     * You can use `ConstructorParameters<T>` to extract expected constructor arguments.
     * 
     * Example: Type Guard for Class Instances
     * 
     * Why use this?
     * - Helps validate constructor arguments dynamically.
     */
    static ConstructorParametersTypeGuards(){

        function isValidConstructor<T extends new (...args: any) => any>(
            constructor: T,
            ...args: ConstructorParameters<T>
        ): boolean {
            return args.length === constructor.length;
        }
        
        console.log(isValidConstructor(User, "Alice", 25)); // ✅ true
        //console.log(isValidConstructor(User, "Alice")); // ❌ false because missing         
    }

    /**
     * Real-World Example: Managing User Sessions
     * 
     * Why use ConstructorParameters<T> here?
     * - Ensures session creation always has the correct parameters.
     */
    static ConstructorParametersRealWorld(){
        
        class Session {
            constructor(public userId: number, public token: string) {}
        
            validate() {
                return this.token.length > 10;
            }
        }
        
        type SessionParams = ConstructorParameters<typeof Session>;
        
        function createSession(...args: SessionParams) {
            return new Session(...args);
        }
        
        const session = createSession(101, "secureToken123");
        console.log(session.validate()); // ✅ true
        
    }

}