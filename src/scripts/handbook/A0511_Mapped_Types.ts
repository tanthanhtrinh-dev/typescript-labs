
type User = {
    id: number;
    name: string;
    age: number;
};

export class MappedTypesExample{

    constructor() {
        console.log("MappedTypesExample constructor");
    }

    /**
     * Basic Example: Making All Properties Optional
     * 
     */
    static Simple = () => {
        
        // Create a type where all properties are optional
        type PartialUser = {
            [K in keyof User]?: User[K];
        };
        
        const user1: PartialUser = {
            name: "Alice" // ✅ No error, all properties are optional
        };
    }

    /**
     * Making All Properties Read-Only
     * 
     */
    static ReadOnlyExample = () => {

        type ReadonlyUser = {
            readonly [K in keyof User]: User[K];
        };

        /**
         * Define a new type ReadonlyUser that makes all properties read-only using `Readonly<T>`.
         */
        //type ReadonlyUser = Readonly<User>;

        const user2: ReadonlyUser = { id: 1, name: "Alice", age: 25 };
        
        // user2.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
    }

    /**
     * Changing Property Types in Mapped Types
     * Convert All Properties to `string`
     */
    static ChangePropertiesStringTypes = () => {
        
        type Stringify<T> = {
            [K in keyof T]: string;
        };
        
        type StringifiedUser = Stringify<User>;
        
        const user3: StringifiedUser = {
            id: "1",
            name: "Alice",
            age: "30"
        };
        
    }

    /**
     * Conditional Mapped Types
     * Convert string properties to boolean
     */
    static ConvertStringToBooleanExample = ()=> {

        type ConvertStringToBoolean<T> = {
            [K in keyof T]: T[K] extends string ? boolean : T[K];
        };
        
        type ModifiedUser = ConvertStringToBoolean<User>;
        
        // { id: number; name: boolean; age: number }        

        const user3: ModifiedUser = {
            id: 1,
            name: false,
            age: 30
        };

    }

    /**
     * Mapped Types with as (Renaming Keys)
     * TypeScript allows renaming keys dynamically in mapped types using `as`.
     * Add a `prefix_` to every key in the User type.
     */
    static RenamingKeysExample = () => {

        type RenameKeys<T> = {
            //[K in keyof T as `prefix_${K}`]: T[K]; //old syntax
            [K in keyof T as K extends string ? `prefix_${K}` : never]: T[K]; //new syntax
        };
        
        type PrefixedUser = RenameKeys<User>;

        const user5: PrefixedUser = {
            prefix_id: 1,
            prefix_name: "Alice",
            prefix_age: 30
        };

        // {
        //   prefix_id: number;
        //   prefix_name: string;
        //   prefix_age: number;
        // }        
    }

    /**
     * Combining Multiple Mapped Types
     * You can combine different mapped types to apply multiple transformations.
     */
    static CombineMappedTypesExample = () => {

        type ReadonlyOptional<T> = {
            readonly [K in keyof T]?: T[K];
        };
        
        type ComplexUser = ReadonlyOptional<User>;
        
        // All properties are now both optional and readonly
        const user4: ComplexUser = { id: 1, name: "Alice", age: 25 };
        
        //user4.id = 5; // ❌ Error: Cannot assign to 'id' because it is read-only
        
    }
  
}