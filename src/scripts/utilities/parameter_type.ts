

class ParameterExample{
    
    /**
     * 
     */
    static Sample()
    {
        function greet(name: string, age: number) {
            return `Hello, ${name}. You are ${age} years old.`;
        }
        
        type GreetParams = Parameters<typeof greet>;        
        const args: GreetParams = ["Alice", 30]; // ✅ Correct
        // const wrongArgs: GreetParams = [30, "Alice"]; // ❌ Error: Argument types are incorrect        
    }

    /**
     * Using Parameters<T> in Function Wrappers
     * 
     * **Example:** Logging Function Calls
     * 
     * Why use Parameters<T> here?
     * 
     * Ensures wrapper function accepts the correct arguments.
     * Avoids manual type duplication for parameters.
     */
    static ParameterFunctionWrappers()
    {
        function fetchData(url: string, method: "GET" | "POST") {
            return `Fetching ${url} with ${method}`;
        }
        
        function logFunctionCall<T extends (...args: any) => any>(
            func: T,
            ...args: Parameters<T>
        ) {
            console.log("Calling function with:", args);
            return func(...args);
        }
        
        const result = logFunctionCall(fetchData, "https://api.com", "GET");
        // ✅ "Calling function with: ['https://api.com', 'GET']"        
    }

    /**
     * Extracting Parameters from Arrow Functions
     * 
     * `Parameters<T>` works with arrow functions too.
     * 
     * Example: Arrow Function Parameters
     * 
     * Why use this?
     * 
     * Makes arrow function parameters reusable.
     */
    static ParameterArrowFunctions(){
        const sum = (a: number, b: number): number => a + b;

        type SumParams = Parameters<typeof sum>;
        
        const values: SumParams = [10, 20]; // ✅ Works
        
    }

    /**
     * Parameters<T> with Constructors
     * For class constructors, use ConstructorParameters<T> instead.
     * 
     * Example: Extracting Constructor Parameters
     * 
     * Why use ConstructorParameters<T>?
     * 
     * Ensures class instantiation follows the correct argument structure.
     */
    static ParametersConstructors(){

        class User {
            constructor(public name: string, public age: number) {}
        }
        
        type UserParams = ConstructorParameters<typeof User>;
        
        const userArgs: UserParams = ["Alice", 25]; // ✅ Correct
        // const invalidUserArgs: UserParams = [25, "Alice"]; // ❌ Error: Wrong types
        
    }

    /**
     * Parameters<T> with Generic Functions
     * 
     * Example: Extracting Parameters from a Generic Function
     * 
     * Why use this?
     * 
     * Extracts function parameters dynamically even with generics.
     */
    static ParametersGenericFunctions(){

        function identity<T>(value: T): T {
            return value;
        }
        
        type IdentityParams = Parameters<typeof identity>;
        
        const param: IdentityParams = [42]; // ✅ Works
        const param2: IdentityParams = ["tan"]; // ✅ Works        
    }

    /**
     * Using Parameters<T> in Type-safe Event Handling
     * 
     * You can use Parameters<T> to infer event listener arguments.
     * 
     * Example: Handling Event Listeners
     * 
     * **Why use Parameters<T> here?**
     * 
     * - Ensures event handlers receive correct arguments.
     * - Avoids hardcoding event listener argument types.
     */
    static ParametersTypeSafeEventHandling(){

        type ClickHandler = (event: MouseEvent, element: HTMLElement) => void;
        type ClickParams = Parameters<ClickHandler>;
        
        function handleClick(...args: ClickParams) {
            console.log("Event:", args[0]);
            console.log("Element:", args[1]);
        }        
    }

    /**
     * Real-World Example: Logging API Calls
     * 
     * Why use Parameters<T> here?
     * 
     * Ensures API calls receive correct arguments dynamically.
     */
    static ParametersRealWorld(){

        function fetchUser(id: number, includeDetails: boolean) {
            return `User ${id} - Details: ${includeDetails}`;
        }
        
        type FetchUserParams = Parameters<typeof fetchUser>;
        
        function logAndExecute<T extends (...args: any) => any>(func: T, ...args: Parameters<T>) {
            console.log("Executing:", func.name, "with", args);
            return func(...args);
        }
        
        const user = logAndExecute(fetchUser, 1, true);
        // ✅ "Executing: fetchUser with [1, true]"
        
    }
}