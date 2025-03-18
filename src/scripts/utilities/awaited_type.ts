
//Using Awaited<T> with Async Functions

async function fetchUser(): Promise<{ id: number; name: string }> {
    return { id: 1, name: "Alice" };
}

function handleAsync<T>(promise: Promise<T>): Promise<Awaited<T>> {
    return Promise.resolve(promise);
}

//Using Awaited<T> with Async Functions
export class AwaiterExample {

    static AwaiterSample() {
        type Example = Awaited<Promise<string>>; // "string"
        type A = Awaited<Promise<string>>; //type A = string 
        type B = Awaited<Promise<Promise<number>>>; //type B = number 
        type C = Awaited<boolean | Promise<number>>;
    }

    static UsingAwaiterAsyncFunctions() {
        type UserType = Awaited<ReturnType<typeof fetchUser>>;
        // Equivalent to: { id: number; name: string }
        const user: UserType = { id: 2, name: "Bob" }; // ✅ Correct structure        
    }

    static UsingAwaiterNestedPromises(){
        type NestedPromise = Promise<Promise<number>>;
        type Unwrapped = Awaited<NestedPromise>; // "number"        
    }

    static UsingAwaiterGenericFunctions(){
        const result = handleAsync(Promise.resolve(42));
        type ResultType = Awaited<typeof result>; // number
    }
    
}