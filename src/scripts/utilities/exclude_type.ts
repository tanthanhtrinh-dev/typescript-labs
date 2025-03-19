
export class ExcludeExample {

    /**
     * Removing a Type from a Union
     * **Why use Exclude<T, U>?**
     * - Prevents certain values from being assigned.
     * - Makes types more restrictive and safer.
     */
    static Sample() {
        type Status = "active" | "inactive" | "banned";
        type AllowedStatus = Exclude<Status, "banned">;

        const status1: AllowedStatus = "active"; // ✅ Works
        const status2: AllowedStatus = "inactive"; // ✅ Works
        // const status3: AllowedStatus = "banned"; // ❌ Error: "banned" is excluded

    }

    /**
     * You can exclude specific primitive types from a union.
     * Example: Removing `null` and `undefined`
     * 
     * **Why use this?**
     * 
     * - Ensures values are always defined before use.
     * - Helps avoid runtime errors with `null`/`undefined` checks.
     */
    static ExcludePrimitiveTypes() {
        type Input = string | number | boolean | null | undefined;
        type NonNullableInput = Exclude<Input, null | undefined>;

        const value1: NonNullableInput = "Hello"; // ✅ Works
        const value2: NonNullableInput = 123; // ✅ Works
        // const value3: NonNullableInput = null; // ❌ Error: "null" is not allowed
    }

    /**
     * You can exclude specific types from function arguments.
     * Example: Restricting Argument Values
     */
    static ExcludeFunctionParameters() {

        type EventType = "click" | "hover" | "drag" | "scroll";
        type AllowedEvents = Exclude<EventType, "scroll">;

        function handleEvent(event: AllowedEvents) {
            console.log(`Handling ${event} event`);
        }

        handleEvent("click"); // ✅ Works
        handleEvent("hover"); // ✅ Works
        // handleEvent("scroll"); // ❌ Error: "scroll" is excluded

    }

    /**
     * Using `Exclude<T, U>` with Objects
     * You can exclude specific keys from an object type using `Exclude<T, keyof U>`.
     * Example: Removing Properties from an Object Type
     * 
     * **Why use this?**
     * 
     * - Removes sensitive fields like password before exposing user data.
     * - Useful for creating API response types.
     * 
     */
    static ExcludeObjects() {
        interface User {
            id: number;
            name: string;
            email: string;
            password: string;
        }

        type PublicUserKeys = Exclude<keyof User, "password">;
        type PublicUser = Pick<User, PublicUserKeys>;

        const user: PublicUser = {
            id: 1,
            name: "Alice",
            email: "alice@example.com"
        }; // ✅ Works (password is removed)

    }

    /**
     * Using `Exclude<T, U>` with Conditional Types
     * `Exclude<T, U>` is often used inside conditional types.
     * 
     * Example: Filtering Function Arguments
     * 
     * Why use this?
     * - Dynamically removes unwanted types from a union.
     */
    static ExcludeConditionalTypes() {
        type Filter<T, U> = T extends U ? never : T;
        type AllowedInputs = Filter<string | number | boolean, boolean>;
        const input: AllowedInputs = "Hello"; // ✅ Works
        // const invalidInput: AllowedInputs = true; // ❌ Error: boolean is excluded
    }

    /**
     * Real-World Example: Filtering User Roles
     * 
     * 
     * Why use Exclude<T, U> here?
     * - Ensures certain roles are restricted from specific parts of the application.
     */
    static ExcludeRealWorld() {
        type UserRole = "admin" | "moderator" | "user" | "guest";
        type NonAdminRoles = Exclude<UserRole, "admin">;

        const role: NonAdminRoles = "user"; // ✅ Works
        // const invalidRole: NonAdminRoles = "admin"; // ❌ Error: "admin" is excluded

    }

}