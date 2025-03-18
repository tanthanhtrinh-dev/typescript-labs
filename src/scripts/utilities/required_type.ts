interface User {
    id?: number;
    name?: string;
    age?: number;
}


interface Product {
    id?: number;
    name?: string;
}

//4. Required<T> in Function Parameters
function saveUser(user: Required<User>) {
    console.log(`Saving user: ${user.name}, Age: ${user.age}`);
}


//5. Required<T> with Nested Objects
interface Address {
    city?: string;
    zip?: number;
}

interface UserProfile {
    name?: string;
    address?: Address;
}

type DeepRequired<T> = {
    [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

/**
 * Required Utility Type for Example
 */
export class RequiredExample{

    /**
     * Why use Required<T>?
     * Ensures that no property can be left undefined.
     * Useful for enforcing strict object creation.
     */
    static Simple()
    {
        type RequiredUser = Required<User>;
        const user1: RequiredUser = {
            id: 1,
            name: "Alice",
            age: 25
        }; // ✅ Must provide all properties
    }

    /**
     * `Required<T>` vs Original Type
     * If a property is optional (?), Required<T> removes the ? and forces it to be provided.
     * Why is this important?
     * Helps enforce mandatory fields in forms, API responses, or database models.
     */
    static RequiredOriginalType(){
        type StrictProduct = Required<Product>;
        //const item: StrictProduct = { id: 101 }; // ❌ Error: Property 'name' is missing
        const item: StrictProduct = { id: 101, name: "test" }; // 
    }
    
    /**
     * `Required<T>` in Function Parameters
     * You can use Required<T> to enforce complete data submission in functions.
     * Why use Required<T> here?
     * Ensures no missing fields in API submissions.
     * Prevents incomplete data from being processed.
     */
    static RequiredFunctionParameters(){
        saveUser({ id: 2, name: "Bob", age: 30 }); // ✅ Works fine
        // saveUser({ name: "Charlie" }); // ❌ Error: 'id' and 'age' are required
    }
    
    /**
     * Required<T> with Nested Objects
     * Like Partial<T>, Required<T> only works on the top-level properties.
     */
    static RequiredNestedObjects(){
        type RequiredUserProfile = Required<UserProfile>;
        const profile: RequiredUserProfile = {
            name: "David",
            address: { city: "New York" } // ❌ Error: zip is missing
        };
        console.info(profile);
    }

    /**
     * Solution: Deep Required Utility
     */
    static DeepRequiredNestedObjects(){

        type DeepRequiredUserProfile = DeepRequired<UserProfile>;
        const deepProfile: DeepRequiredUserProfile = {
            name: "Eve",
            address: { city: "Los Angeles", zip: 90001 } // ✅ Works fine
        };
        console.info(deepProfile);
    }

    /***
     * Utility Type	| What It Does	                    | Use Case
     * Required<T>	| Makes all properties mandatory	| Strict object validation
     * Partial<T>	| Makes all properties optional	    | Flexible object updates
     */
    static ComparisonPartialRequired()
    {
        type OptionalUser = Partial<User>; // All properties are optional
        type StrictUser = Required<User>; // All properties are required
    }
}

