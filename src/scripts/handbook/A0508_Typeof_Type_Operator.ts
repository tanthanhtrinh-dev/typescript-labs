
class SimpleClass {
    constructor() {
        console.log("SimpleClass constructor");
    }
}

declare const msgbox: (prompt: string) => boolean;

export class TypeOfExample{
    constructor() {
        console.log("TypeOfExample constructor");
    }

    /**
     * Example of typeof operator
     */
    static Simple = () => {
        console.log(typeof "hello"); // "string"
        console.log(typeof 42); // "number"
        console.log(typeof true); // "boolean"
        console.log(typeof {}); // "object"
        console.log(typeof []); // "object" (Arrays are a subtype of objects)
        console.log(typeof function () { }); // "function"
        console.log(typeof SimpleClass); // "function"
    }

    /**
     * `typeof` as a Type Operator in TypeScript
     * TypeScript extends typeof to allow type inference at compile time.
     */
    static AsTypeOperator = () => {

        const user = {
            id: 1,
            name: "Alice",
            age: 25
        };
        
        /**
         * `typeof` user extracts the type from user and assigns it to **UserType**.
         * 
         */
        type UserType = typeof user;
        
        const newUser: UserType = {
            id: 2,
            name: "Bob",
            age: 30
        };
        
    }
       

    static Limitations = () => {
        // Meant to use = ReturnType<typeof msgbox>
        // let shouldContinue: typeof msgbox("Are you sure you want to continue?"); //❌ Cannot find name 'msgbox'.
    }

}