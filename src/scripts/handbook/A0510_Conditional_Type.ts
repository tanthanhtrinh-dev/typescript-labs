

export class ConditionalTypesExample{

    constructor() {
        console.log("ConditionalTypesExample constructor");
    }

    static Simple = () => {

        type CheckType<T> = T extends string ? "Text" : "Not Text";

        type A = CheckType<string>;  // "Text"
        type B = CheckType<number>;  // "Not Text"
        
    }

    /**
     * The indexing type is itself a type, so we can use unions, keyof, or other types entirely:
     */
    static workUnionKeyOf = () => {

        type Person = { age: number; name: string; alive: boolean };

        type I1 = Person["age" | "name"]; //type I1 = string | number
         
        type I2 = Person[keyof Person]; //type I2 = string | number | boolean
         
        type AliveOrName = "alive" | "name";
        type I3 = Person[AliveOrName]; //type I3 = string | boolean

    }

    /**
     * Conditional Types with Generic Functions
     * Why use this?
     * Ensures return type adapts based on input.
     * If `T` is `string`, return `number`, otherwise return `boolean`.
     */
    static workWithGenericFunctions = () => {

        function process<T>(value: T): T extends string ? number : boolean {
            return (typeof value === "string" ? value.length : true) as any;
        }
        
        const result1 = process("Hello");  // result1: number (5)
        const result2 = process(42);       // result2: boolean (true)
        
    }
    /**
     * Using Conditional Types with `keyof`
     * Conditional types are useful for checking if an object contains a specific property.
     */
    static workWithKeyof = () => {

        type HasId<T> = "id" extends keyof T ? "Has ID" : "No ID";

        type User = { id: number; name: string };
        type Guest = { name: string };
        
        type Result1 = HasId<User>;  // "Has ID"
        type Result2 = HasId<Guest>; // "No ID"

    }

    /**
     * Inferring Types with `infer`
     * The infer keyword lets you extract types dynamically.
     * Example: Extracting Return Type from a Function
     */
    static workWithInferringTypes = () => {

        type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

        function getUser() {
            return { id: 1, name: "Alice" };
        }
        
        type UserType = ReturnTypeOf<typeof getUser>;         
        // UserType = { id: number, name: string }

        const user : UserType = { id: 2, name: "Alice new" };   
        console.log(user);        
    }

    /**
     * Conditional Types with Union Types
     * Example: Conditional types work on union types, applying conditions to each type individually.
     */
    static workWithUnionTypes = () => {

        type Check<T> = T extends string ? "String Type" : "Other Type";

        type Test = Check<string | number>; // "String Type" | "Other Type"
        
    }

    /**
     * Filtering Types from a Union
     * Why use this? 
     * => Removes null and undefined, ensuring `T` is always valid.
     */
    static workWithFilteringTypes = () => {
        type NonNullable<T> = T extends null | undefined ? never : T;

        type Example = NonNullable<string | null | undefined>; 
        // "string"
    }

    /**
     * Mapping Over Object Properties
     */
    static workWithMappingOverObjectProperties = () => {

        type ConvertToBoolean<T> = {
            [K in keyof T]: T[K] extends string ? boolean : T[K];
        };
        
        type User = { name: string; age: number };
        
        type ModifiedUser = ConvertToBoolean<User>;
        // { name: boolean; age: number }
        
    }

    
}