
class NoInferExample {

    static SampleWithoutNoInfer() {

        function setValue<T>(value: T, defaultValue: T): T {
            return value ?? defaultValue;
        }

        const resultNumber = setValue(42, 40); // Works correctly
        //const result = setValue(42, "default"); // ❌ No error, but incorrect types                
    }

    static SampleWithNoInfer() {
        type NoInfer<T> = [T][T extends any ? 0 : never];

        function setValueStrict<T>(value: T, defaultValue: NoInfer<T>): T {
            return value ?? defaultValue;
        }

        //const invalidResult = setValueStrict(42, "default"); // ❌ Error: "default" is not assignable to `number`
        const validResult = setValueStrict<number>(42, 100); // ✅ Works correctly

    }

    /**
     * Real-World Example: Preserving Explicit Types in Function Arguments
     * When passing an explicit type but allowing generics, `NoInfer<T>` helps retain the intended type.
     * Example: Generic Configuration Object
     */
    static NoInferRealWorld(){

        type Config<T> = {
            value: T;
            default: NoInfer<T>;
        };
        
        const config: Config<number> = {
            value: 42,
            default: 0 // ✅ Works
        };
        
        //const invalidConfig: Config<number> = { value: 42, default: "fallback" }; // ❌ Error        
    }

    /**
     * Using `NoInfer<T>` in Overloaded Functions
     * 
     * When using function overloads, `NoInfer<T>` ensures the expected type is maintained.
     * 
     * Example: Preventing Type Widening in Overloads
     * 
     * Why use `NoInfer<T>` here?
     * - Prevents TypeScript from broadening T beyond the intended type.
     */
    static NoInferOverloadedFunctions(){

        function processData<T>(data: T): void;

        function processData<T>(data: NoInfer<T>): void {
            console.log(data);
        }
        
        processData<number>(100); // ✅ Explicitly declared type
        processData<string>("text"); 
        //processData<number>("text"); // ❌ Error: "text" is not assignable to `number`        
    }

    /**
     * `NoInfer<T>` with Default Parameters
     * 
     * When using default values in generics, NoInfer<T> ensures correct type matching.
     * 
     * Example: Default Parameters Without NoInfer<T>
     * 
     * Problem: Default value allows unintended types (`any`).
     * Solution: Enforcing Type with `NoInfer<T>`
     * 
     * Why use NoInfer<T> here?
     * Prevents unexpected default values from overriding type safety.
     */
    static NoInferDefaultParameters(){

        function getData<T>(value: T = "default" as any): T {
            return value;
        } 

        function getDataStrict<T>(value: NoInfer<T>): T {
            return value;
        }

        const data = getData<number>(); // ❌ "default" is inferred as `any`

        // const invalidData = getDataStrict<number>("default"); // ❌ Error
        const validData = getDataStrict<number>(42); // ✅ Works
    }

    /**
     * Real-World Example: Strict Event Listeners
     * 
     * Why use NoInfer<T> here?
     * 
     * Prevents wrong event types from being passed to event listeners.
     */
    static NoInferRealWorld02(){

        type EventHandler<T> = (event: NoInfer<T>) => void;

        function registerEvent<T>(event: string, handler: EventHandler<T>) {
            console.log(`Registered ${event} event.`);
        }
        
        registerEvent<MouseEvent>("click", (e) => {
            console.log(e.clientX); // ✅ Works
        });
        
        // registerEvent<MouseEvent>("click", (e: KeyboardEvent) => {}); // ❌ Error
        
    }
}