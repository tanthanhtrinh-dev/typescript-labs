
export class ReturnTypeExample{
    

    /**
     * Demonstrates the use of the `ReturnType` utility type in TypeScript.
     * 
     * This method contains an example function `getUser` that returns an object
     * with a specific structure. The `ReturnType` utility type is used to infer
     * the return type of `getUser`, which is then assigned to the `UserReturn` type.
     * 
     * The `UserReturn` type is used to ensure that objects assigned to it conform
     * to the structure returned by `getUser`. This is illustrated by the `user` 
     * constant, which matches the expected structure, and the commented-out 
     * `invalidUser` constant, which demonstrates a type error when the structure 
     * is incomplete.
     * 
     * Example:
     * ```typescript
     * function getUser(): { id: number; name: string } {
     *     return { id: 1, name: "Alice" };
     * }
     * 
     * type UserReturn = ReturnType<typeof getUser>;
     * 
     * const user: UserReturn = { id: 2, name: "Bob" }; // ✅ Works
     * // const invalidUser: UserReturn = { id: 3 }; // ❌ Error: Missing 'name'
     * ```
     */
    static Sample()
    {

        function getUser(): { id: number; name: string } {
            return { id: 1, name: "Alice" };
        }
        
        type UserReturn = ReturnType<typeof getUser>;
        
        const user: UserReturn = { id: 2, name: "Bob" }; // ✅ Works
        // const invalidUser: UserReturn = { id: 3 }; // ❌ Error: Missing 'name'
        
    }

    /**
     * Using ReturnType<T> in Function Wrappers
     * 
     * You can use ReturnType<T> to wrap functions dynamically.
     * 
     * Example: Logging Function Calls
     * 
     * Why use ReturnType<T> here?
     * - Ensures the wrapper returns the correct function result type.
     */
    static ReturnTypeFunctionWrappers(){
        function fetchData(): string {
            return "Data fetched!";
        }
        
        function logAndExecute<T extends (...args: any) => any>(
            func: T
        ): ReturnType<T> {
            console.log("Executing function...");
            return func();
        }
        
        const result = logAndExecute(fetchData); // ✅ "Executing function..."
        
    }

    /**
     * Extracting Return Type of Arrow Functions
     * 
     * `ReturnType<T>` works with arrow functions too.
     * 
     * Example: Arrow Function Return Type
     * 
     * **Why use this?**
     * 
     * Makes arrow function return types reusable.
     */
    static ReturnTypeArrowFunctions(){
        const sum = (a: number, b: number): number => a + b;

        type SumReturn = ReturnType<typeof sum>; // ✅ number
        
        const result: SumReturn = 42; // ✅ Works
        
    }

    /**
     * `ReturnType<T>` with Async Functions
     * 
     * For async functions, `ReturnType<T>` extracts the `Promise` type.
     * 
     * Example: Extracting Return Type from Async Functions
     * 
     * Why use this?
     * 
     * Ensures async return types are properly extracted.
     */
    static ReturnTypeAsyncFunctions(){

        async function fetchUser(): Promise<{ id: number; name: string }> {
            return { id: 1, name: "Alice" };
        }

        /**
         * Return Type from Async Functions
         */
        type AsyncUserReturn = ReturnType<typeof fetchUser>; // ✅ Promise<{ id: number; name: string }>

        /**
         * What if you need only the resolved type?
         * Use `Awaited<T>` to extract the non-Promise type:
         */
        type ResolvedUserReturn = Awaited<ReturnType<typeof fetchUser>>; // ✅ { id: number; name: string }

    }

    /**
     * Using ReturnType<T> in API Responses
     * 
     * `ReturnType<T>` ensures API response types remain consistent.
     * 
     * Example: Standardizing API Responses
     * 
     * Why use ReturnType<T> here?
     * - Ensures all API responses follow the correct structure.
     */
    static ReturnTypeAPIResponses()
    {
        function getApiResponse() {
            return { success: true, data: { id: 1, name: "Alice" } };
        }
        
        type ApiResponse = ReturnType<typeof getApiResponse>;
        
        const response: ApiResponse = {
            success: true,
            data: { id: 2, name: "Bob" }
        }; // ✅ Works
        
    }

    /**
     * 
     */
    static ReturnTypeRealWorld()
    {
        function getSession(): { userId: number; token: string } {
            return { userId: 101, token: "secureToken123" };
        }
        
        type SessionData = ReturnType<typeof getSession>;
        
        const session: SessionData = {
            userId: 200,
            token: "newToken456"
        }; // ✅ Works
        
    }

}