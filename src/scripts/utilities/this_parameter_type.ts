
class User {
    name = "Alice";

    greet(this: User, greeting: string) {
        return `${greeting}, ${this.name}`;
    }    
}

export class ThisParameterTypeExample{

    /**
     * Extracting `this` Parameter Type
     * 
     * Why use ThisParameterType<T>?
     * - Ensures methods maintain their correct this context.
     * - Helps prevent calling methods without an object reference.
     */
    static Sample(){        
        type UserThis = ThisParameterType<typeof User.prototype.greet>; // ✅ User                
    }

    /**
     * Using `ThisParameterType<T>` in Function Wrappers
     * You can extract and reuse `this` types when modifying function behavior.
     * Example: Binding Methods to a Specific Context
     * 
     * Why use ThisParameterType<T> here?
     * - Ensures the function is bound to the correct this context.
     */
    static ThisParameterTypeFunctionWrappers()
    {
        /**
         * 
         * @param fn 
         * @param context 
         * @returns 
         */
        function bindThis<T extends (this: any, ...args: any) => any>(
            fn: T,
            context: ThisParameterType<T>
        ) {
            return fn.bind(context);
        }
        
        const user = new User();

        const boundGreet = bindThis(user.greet, user);
        
        console.log(boundGreet("Hello")); // ✅ "Hello, Alice"        
    }

    /**
     * `ThisParameterType<T>` in Class Decorators
     * When working with class decorators, `ThisParameterType<T>` helps define method decorators properly.
     * Enforcing `this` Type in a Decorator
     * 
     */
    static ThisParameterTypeClassDecorators(){        
       
        function LogMethod<T extends (this: any, ...args: any) => any>(
            target: any,
            propertyKey: string,
            descriptor: TypedPropertyDescriptor<T>
        ) {
            const originalMethod = descriptor.value!;
            
            descriptor.value = function (this: ThisParameterType<T>, ...args: any[]) {
                console.log(`Calling ${propertyKey} with`, args);
                return originalMethod.apply(this, args);
            } as T;
        }
        
        class Person {
            
            name = "John";
            
            //@LogMethod    
            sayHi(this: Person, greeting: string) {
                return `${greeting}, ${this.name}`;
            }
        }
        
        const person = new Person();
        console.log(person.sayHi("Hello")); // ✅ Logs: Calling sayHi with ["Hello"]
        
    }
    /**
     * Since arrow functions don’t have their own this, ThisParameterType<T> returns unknown.
     * Example: Arrow Function Behavior
     * 
     * Why does ThisParameterType<T> return unknown here?
     * - Arrow functions do not bind this (they inherit it from the surrounding scope).
     */
    static ThisParameterTypeArrowFunctions()
    {
        // const arrowFunction = (this: any, name: string) => `Hello, ${name}`;
        // type ArrowThis = ThisParameterType<typeof arrowFunction>; // ✅ unknown        
    }

}
