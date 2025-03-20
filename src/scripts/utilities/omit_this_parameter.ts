class User {
    name = "Alice";

    greet(this: User, greeting: string) {
        return `${greeting}, ${this.name}`;
    }    
}

export class OmitThisParameterExample{
 
    /**
     * Basic Example: Removing `this` from a Method
     * 
     * Why use `OmitThisParameter<T>`?
     * - Converts class methods into standalone functions that can be used flexibly
     */
    static Sample(){

        class User {
            name = "Alice";
        
            greet(this: User, message: string) {
                return `${message}, ${this.name}`;
            }
        }
        
        type GreetWithoutThis = OmitThisParameter<typeof User.prototype.greet>;
        
        const greetStandalone: GreetWithoutThis = User.prototype.greet;
        
        console.log(greetStandalone("Hello")); // ❌ Error: "this" is undefined
        console.log(greetStandalone.call({ name: "Bob" }, "Hi")); // ✅ Output: "Hi, Bob"
        
    }

    /**
     * Using `OmitThisParameter<T>` in Function Wrappers
     * When wrapping a method, you don’t always want to require `this`.
     * Example: Converting Class Methods to Standalone Functions
     * 
     * Why use this?
     * - Avoids explicit .bind(this) calls when extracting methods.
     */
    static OmitThisParameterFunctionWrappers(){

        function wrapFunction<T extends (this: any, ...args: any[]) => any>(
            fn: T
        ): OmitThisParameter<T> {
            return ((...args: Parameters<T>) => fn(...args)) as OmitThisParameter<T>;
        }
        
        const standaloneGreet = wrapFunction(User.prototype.greet);
        
        console.log(standaloneGreet.call({ name: "Charlie" }, "Hey")); // ✅ Works
        
    }

}