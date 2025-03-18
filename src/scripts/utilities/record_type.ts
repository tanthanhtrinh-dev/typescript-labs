
/***
 * 
 */
export class RecordExample {

    /**
     * Basic Example: _Creating a Key-Value Mapping_
     * 
     * Why use Record<Keys, Type>?
     * - Ensures only allowed keys (admin, editor, viewer) exist.
     * - Prevents accidental key additions or removals
     */
    static Sample() {

        type UserRoles = Record<"admin" | "editor" | "viewer", boolean>;

        const roles: UserRoles = {
            admin: true,
            editor: false,
            viewer: true
        };
    }

    /**
     * `Record<Keys, Type>` for Dynamic Objects
     * 
     * Instead of defining multiple interfaces, Record allows dynamic mappings.
     * 
     * _Example:_ Defining User Permissions
     * 
     * **Why use this?**
     * - Allows flexible keys (string) while ensuring all values are boolean.
     * - Prevents wrong value types (e.g., string | number instead of boolean)
     */
    static RecordDynamicObjects() {
        type Permissions = Record<string, boolean>;
        const userPermissions: Permissions = {
            canEdit: true,
            canDelete: false,
            canShare: true
        };
    }

    /**
     * **`Record<K, T>` with Enums**
     * 
     * When using enums, `Record<K, T>` ensures all enum values are mapped.
     * 
     * Why use Record<K, T> here?
     * - Ensures all Role values are included.
     * - Restricts access levels to numbers only.
     * 
     */
    static RecordEnums() {

        enum Role {
            ADMIN = "admin",
            EDITOR = "editor",
            VIEWER = "viewer"
        }

        type RoleAccess = Record<Role, number>;

        const accessLevels: RoleAccess = {
            [Role.ADMIN]: 3,
            [Role.EDITOR]: 2,
            [Role.VIEWER]: 1
        };

    }

    /**
     * **`Record<Keys, Type>` for API Responses**
     * 
     * When dealing with APIs, Record helps structure consistent response formats.
     * 
     * _Example: API Response Structure_
     * 
     * Why use this?
     * - Ensures all API responses follow a strict format.
     * - Prevents missing or incorrectly typed properties.
     */
    static RecordApiResponses() {

        type ApiResponse = Record<"success" | "data" | "error", string | boolean>;

        const response: ApiResponse = {
            success: true,
            data: "User data fetched successfully",
            error: ""
        };
    }

    /**
     * **`Record<K, T>` with Nested Objects**
     * 
     * You can use Record to enforce complex data structures.
     * 
     * _Example: Storing User Profiles_
     * 
     * **Why use this?**
     * - Ensures each user has a valid profile.
     * - **Keys** must be string, **values** must be UserProfile.
     */
    static RecordNestedObjects(){
        type UserProfile = {
            name: string;
            age: number;
        };
        
        type UserDictionary = Record<string, UserProfile>;
        
        const users: UserDictionary = {
            alice: { name: "Alice", age: 30 },
            bob: { name: "Bob", age: 25 }
        };
    }

    /***
     * **Using `Record<K, T>` in Function Parameters**
     * A function can accept Record<K, T> to enforce specific key-value structures.
     * 
     * _Example: Function Accepting Configurations_
     * 
     *  Why use `Record<K, T>`?
     * - Ensures all required config keys are provided.
     * - Prevents passing unexpected properties.
     */
    static RecordFunctionParameters(){
        type ConfigOptions = Record<"theme" | "language", string>;

        function updateConfig(config: ConfigOptions) {
            console.log(`Updating config: ${JSON.stringify(config)}`);
        }
        
        updateConfig({ theme: "dark", language: "en" }); // ✅ Works        
        // updateConfig({ theme: "light" }); // ❌ Error: missing 'language'
    }


}