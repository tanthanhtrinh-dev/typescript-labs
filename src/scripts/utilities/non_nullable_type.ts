
class NonNullableExample{
    
    /**
     * Basic Example: Removing `null` and `undefined`
     * 
     * Why use `NonNullable<T>`?
     * 
     * - Ensures variables always have a valid value.
     * - Avoids unnecessary null/undefined checks in code.
     */
    static Sample()
    {
        type Data = string | number | null | undefined;
        type StrictData = NonNullable<Data>;
        
        const value1: StrictData = "Hello"; // ✅ Works
        const value2: StrictData = 42; // ✅ Works

        // const value3: StrictData = null; // ❌ Error: 'null' is not allowed
        // const value4: StrictData = undefined; // ❌ Error: 'undefined' is not allowed
        
    }

    /**
     * You can ensure that a function never receives `null` or `undefined`.
     * Enforcing Defined Arguments
     * 
     * Why use NonNullable<T> in function parameters?
     * 
     * - Prevents unexpected null values causing errors.
     */
    static NonNullFunctionParameters(){

        function printMessage(message: NonNullable<string>) {
            console.log(`Message: ${message}`);
        }
        
        printMessage("Hello TypeScript!"); // ✅ Works
        // printMessage(null); // ❌ Error: 'null' is not assignable
        // printMessage(undefined); // ❌ Error: 'undefined' is not assignable
    }

    /***
     * NonNullable<T> in Function Return Types
     * You can use NonNullable<T> to ensure a function always returns a valid value.
     * Avoiding null Returns
     */
    static NonNullFunctionReturnTypes(){

        function getUserName(id: number): NonNullable<string | undefined> {
            const users: Record<number, string> = { 1: "Alice", 2: "Bob" };
            return users[id] ?? "Unknown"; // Ensures no undefined/null value is returned
        }
        
        const name = getUserName(3); // ✅ "Unknown"
    }

    /***
     * `NonNullable<T>` with `Exclude<T, U>`
     * You can achieve the same effect using `Exclude<T, null | undefined>`.
     * 
     * Which one to use?
     * 
     * `NonNullable<T>` is more readable and concise for removing `null | undefined`.
     * `Exclude<T, null | undefined>` is useful when working with other excluded types.
     */
    static NonNullableWithExclude(){

        type Data = string | number | null | undefined;

        type NonNullableData = NonNullable<Data>; // ✅ Removes null & undefined
        type ExcludedData = Exclude<Data, null | undefined>; // ✅ Equivalent
        
        const value: NonNullableData = "Hello"; // ✅ Works
        
        //Equivalent Usage
        const value2: ExcludedData = "Hello"; // ✅ Works
        
    }

    /**
     * `NonNullable<T>` with Optional Properties
     * When working with objects, NonNullable<T> can ensure required fields are not undefined.
     * Enforcing Required Fields
     * 
     * Why use this?
     * Ensures optional fields are always properly defined.
     */
    static NonNullableOptionalProperties(){

        interface User {
            id: number;
            name?: string | null;
        }
        
        type RequiredUser = {
            [K in keyof User]: NonNullable<User[K]>;
        };
        
        const user2: User = {
            id: 1,
            name: null 
        };

        //but RequiredUser
        const user: RequiredUser = {
            id: 1,
            name: "Alice" // ✅ Must provide a valid name
        };        
        
        // const invalidUser: RequiredUser = { id: 2, name: null }; // ❌ Error: 'null' is not allowed
        
    }

    /**
     * Real-World Example: Ensuring Valid User Data
     */
    static NonNullableRealWorld()
    {
        interface User {
            id: number;
            email?: string | null;
        }
        
        type ValidUser = {
            [K in keyof User]: NonNullable<User[K]>;
        };
        
        const user: ValidUser = {
            id: 1,
            email: "user@example.com" // ✅ Must be non-null
        };
        
    }
}