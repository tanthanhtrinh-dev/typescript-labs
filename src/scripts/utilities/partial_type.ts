interface User {
    id: number;
    name: string;
    age: number;
}

function updateUser(user: User, fieldsToUpdate: Partial<User>) {
    return { ...user, ...fieldsToUpdate };
}


//Partial<T> with Nested Objects
interface Address {
    city: string;
    zip: number;
}

interface UserProfile {
    name: string;
    address: Address;
}

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Partial in Utility Typescript Example
 */
export class PartialExample {

    /**
     * Partial<T> for Updating Objects
     * When updating objects, you might not want to pass all properties.
     */
    static Simple() {
        type PartialUser = Partial<User>;
        const user1: PartialUser = { name: "Alice" }; // ✅ Allowed (id & age are optional)
    }

    /**
     * `Partial<T>` in Function Parameters
     * Sometimes, a function might accept an object where only some fields are required.
     */
    static PartialFunctionParameters() {

        const user1: User = {
            id: 1,
            name: "Tan King",
            age: 18
        };

        const todo2 = updateUser(user1, {
            age: 19,
        });

        console.info(todo2);
    }
    
    /***
     * Partial<T> with Nested Objects
     * Partial<T> works only on the top-level properties. If you need deep partial, you must use recursion(đệ quy).
     */
    static PartialNestedObjects() {
        type PartialUserProfile = Partial<UserProfile>;
        const profile: PartialUserProfile = {
            name: "David",
            //address: { city: "New York" } // ❌ Error: zip is missing
            address: { city: "New York", zip: 7000 } //✅ Correct
        };
    }

    /**
     * Solution: Deep Partial Utility
     * Makes all nested properties optional. 
     * Useful for deeply structured data updates.
     */
    static PartialDeepUtility() {

        type DeepPartialUserProfile = DeepPartial<UserProfile>;
        const deepProfile: DeepPartialUserProfile = {
            name: "David",
            address: { city: "New York" } // ✅ Works fine!
        };
    }


}