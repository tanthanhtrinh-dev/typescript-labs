interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

interface UserProfile {
    name: string;
    address: {
        city: string;
        zip: number;
    };
}

type DeepPick<T, K extends keyof T> = {
    [P in K]: T[P] extends object ? DeepPick<T[P], keyof T[P]> : T[P];
};

export class PickExample{

    /**
     * Basic Example: **Picking Specific Properties**
     * 
     * _Why use `Pick<Type, Keys>`?_
     * - Ensures only necessary properties are used.
     * - Prevents exposing unwanted fields.
     */
    static Sample(){
        
        type UserPreview = Pick<User, "id" | "name">;        
        const user1: UserPreview = { id: 1, name: "Alice" }; // ✅ Works fine
        // const user2: UserPreview = { id: 2, email: "bob@example.com" }; // ❌ Error: 'email' is not in 'UserPreview'        
    }

    /**
     * `Pick<T, K>` for API Responses
     * When returning data from an API, you might only want to send certain fields.
     * 
     * _Example: Picking Public Data_
     * 
     * **Why use this?**
     * - Prevents exposing sensitive data like email and age.
     * - Ensures consistent API responses.
     */
    static PickApiResponses(){
        type PublicUser = Pick<User, "id" | "name">;

        const userResponse: PublicUser = {
            id: 5,
            name: "Charlie"
        };
    }

    /**
     * `Pick<T, K>` with Function Parameters
     * 
     * _You can **restrict function parameters** to only include necessary properties._
     * 
     * Example: Updating User Info
     * 
     * **Why use Pick<T, K>?**
     * - Ensures only modifiable fields are passed.
     * - Prevents unintended property updates.
     */
    static PickFunctionParameters(){

        function updateUser(id: number, updates: Pick<User, "name" | "email">) {
            console.log(`Updating user ${id} with`, updates);
        }
        
        updateUser(1, { name: "Bob", email: "bob@example.com" }); // ✅ Works
        //updateUser(2, { age: 30 }); // ❌ Error: 'age' is not allowed
    }

    /**
     * `Pick<T, K>` for Data Transfer Objects (DTOs)
     * 
     * _When working with database models, you can create DTOs that only include required fields._
     * 
     * **Example:** Picking DTO Properties
     * 
     * **Why use this?**
     * - Prevents unnecessary fields from being included.
     * - Ensures consistent structure for creating new users.
     */
    static PickDataTransferObjects(){
        type CreateUserDTO = Pick<User, "name" | "email" | "id">;

        const newUser: CreateUserDTO = {
            id: 1,
            name: "David",
            email: "david@example.com"
        };
    }

    /**
     * `Pick<T, K>` with Nested Objects
     * 
     * Pick<T, K> only works on the first level.
     * 
     * **Example:** _Picking Top-Level Properties_
     * 
     * What if I want to pick nested properties?
     * - Use custom utility types for deeper selections.
     */
    static PickNestedObjects(){

        type PickedProfile = Pick<UserProfile, "name" | "address">;

        const profile: PickedProfile = {
            name: "Eve",
            address: { city: "New York", zip: 10001 } // ✅ Works
        };

    }

    /**
     * 
     * Solution: Deep Pick Utility
     * 
     * **Why use DeepPick<T, K>?**
     * - Allows selecting nested properties.
     * - Useful for complex data structures.
     */
    static DeepPickNestedObjects(){
        
        type PickedAddress = DeepPick<UserProfile, "address">;

        const address: PickedAddress = {
            address: { city: "Los Angeles", zip: 90001 } // ✅ Works fine
        };
    }

}