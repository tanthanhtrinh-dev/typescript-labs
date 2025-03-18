
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string;
    profile: {
        age: number;
        address: {
            city: string;
            zip: number;
            country: string;
        };
    };
}

interface UserProfile {
    name: string;
    email: string;
    address: {
        city: string;
        zip: number;
        country: string;
    };

}

// type DeepOmit<T, K extends keyof T> = {
//     [P in Exclude<keyof T, K>]: T[P] extends object ? DeepOmit<T[P], keyof T[P]> : T[P];
// };

type DeepOmit<T, K extends keyof any> = {
    [P in keyof T as P extends K ? never : P]: T[P] extends object ? DeepOmit<T[P], K> : T[P];
};

type UserWithoutPassword = Omit<User, "password"> & {
    profile: Omit<User["profile"], "address"> & {
        address: Omit<User["profile"]["address"], "zip">
    };
};

export class OmitExample {

    /**
     * Basic Example: Removing a Property
     * 
     * Why use `Omit<Type, Keys>`?
     * - Ensures certain properties are excluded from objects.
     * - Prevents accidental inclusion of sensitive fields.
     */
    static Sample() {

        type UserWithoutEmail = Omit<User, "email" | "password" | "profile">;

        const user: UserWithoutEmail = {
            id: 1,
            name: "Alice",
            age: 25
        }; // ✅ Works fine

        // const invalidUser: UserWithoutEmail = { id: 2, name: "Bob", email: "bob@example.com" }; 
        // ❌ Error: 'email' does not exist in type 'UserWithoutEmail'
    }

    /**
     * Omit<T, K> for API Responses
     * When sending data to an API, some fields might not be necessary.
     * 
     * Example: Removing Internal Data Before Sending to API
     * 
     * **Why use this?**
     * - Prevents exposing id and email to external APIs.
     * - Ensures only relevant data is sent.
     * 
     */
    static OmitApiResponses() {
        type UserPublicData = Omit<User, "id" | "email" | "password" | "profile">;

        const publicUser: UserPublicData = {
            name: "Charlie",
            age: 30
        };
    }

    /**
     * `Omit<T, K>` in Function Parameters
     * You can use Omit<T, K> to prevent modifying restricted fields.
     * 
     * **Example: Preventing ID, Password Modification**
     * 
     * Why use Omit<T, K>?
     * - Ensures some properties (like id) remain immutable.
     * - Prevents unintended modifications.
     * 
     */
    static OmitFunctionParameters() {

        function updateUser(userId: number, updates: Omit<User, "id" | "password" | "profile">) {
            console.log(`Updating user ${userId} with`, updates);
        }

        updateUser(1, { name: "Bob", email: "bob@example.com", age: 28 }); // ✅ Works
        // updateUser(2, { id: 3, name: "Charlie" }); // ❌ Error: 'id' cannot be updated
    }

    /**
     * Omit<T, K> with Nested Objects
     * By default, Omit<T, K> only affects top-level properties.
     * Example: Removing Top-Level Properties
     * 
     */
    static OmitNestedObjects() {

        type WithoutAddress = Omit<UserProfile, "address">;

        const profile: WithoutAddress = { name: "David", email: "a123@gmail.com" }; // ✅ Works

        console.info(profile);
    }

    /**
     * Solution: Deep Omit Utility
     * 
     * **Why use DeepOmit<T, K>?**
     * - Removes sensitive fields (email) and unnecessary details (zip)
     * - Keeps important but non-sensitive data (city, country).
     * - Useful for complex data filtering.
     */
    static DeepOmitNestedObjects() {
        // Removing "zip" but keeping "city" and "country"
        type UserWithoutZip = DeepOmit<UserProfile, "zip" | "email">;

        const userWithoutZip: UserWithoutZip = {
            name: "Alice",
            //email: "alice@example.com",
            address: {
                city: "Los Angeles",
                country: "USA"
            }
        }; // ✅ Works fine

        // const invalidUser: UserWithoutZip = {
        //    name: "Bob", 
        //    email: "bob@example.com",
        //    address: { city: "NY", zip: 12345, country: "USA" } 
        // }; ❌ Error: 'zip' is not allowed

        console.info(userWithoutZip);

    }

    /**
     * Alternative Approach: Omit with Pick for Nested Fields
     * Instead of `DeepOmit<T, K>`, another approach is using `Omit<T, K>` with `Pick<T, K>`.
     * Example: Using Omit and Pick Together
     * 
     */
    static OmitPickNestedFields(){
        const apiUser2: UserWithoutPassword = {
            id: 1,
            name: "Eve",
            email: "eve@example.com",
            age: 12,
            profile: {
                age: 28,
                address: {
                    city: "San Diego",
                    country: "USA",
                    //zip: 7000
                }
            }
        }; // ✅ Works fine
    }

}