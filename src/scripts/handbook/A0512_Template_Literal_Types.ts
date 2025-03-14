
type User = {
    id: number;
    name: string;
    age: number;
};

export class TemplateLiteralTypesExample {

    constructor() {
        console.log("TemplateLiteralTypesExample constructor");
    }

    /**
     * Basic Example: Making All Properties Optional
     * 
     */
    static Simple = () => {
        type Size = "small" | "medium" | "large";
        type ButtonVariant = `btn-${Size}`;

        const btn1: ButtonVariant = "btn-small"; // ✅ Valid
        const btn2: ButtonVariant = "btn-large"; // ✅ Valid
        // const btn3: ButtonVariant = "btn-extra"; // ❌ Error: "btn-extra" is not assignable to ButtonVariant

    }

    /**
     * Combining Multiple Template Literal Types
     */
    static CombineMultipleTemplateLiteralTypes = () => {

        type Theme = "light" | "dark";
        type Size = "small" | "medium" | "large";
        type ButtonClass = `${Theme}-btn-${Size}`;

        const primaryBtn: ButtonClass = "light-btn-small"; // ✅ Valid
        const secondaryBtn: ButtonClass = "dark-btn-large"; // ✅ Valid
        // const invalidBtn: ButtonClass = "red-btn-medium"; // ❌ Error: "red" is not in Theme
    }

    /**
     * Extracting Parts of an Object's Keys
     * 
     */
    static ExtractPartsOfObjectKeys = () => {

        type APIEndpoints = {
            users: "/users";
            posts: "/posts";
            comments: "/comments";
        };

        type APIRoutes = `${keyof APIEndpoints}-route`;

        const route: APIRoutes = "users-route"; // ✅ Valid
        //const invalidRoute: APIRoutes = "products-route"; // ❌ Error: "products" is not in APIEndpoints

    }

    /**
     * Using Template Literals with Functions
     */
    static UsingTemplateLiteralsWithFunctions = () => {

        type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
        type Endpoint = "/users" | "/posts" | "/comments";

        type APIRequest = `${HTTPMethod} ${Endpoint}`;

        function fetchAPI(request: APIRequest) {
            console.log(`Fetching: ${request}`);
        }

        fetchAPI("GET /users"); // ✅ Valid
        fetchAPI("POST /posts"); // ✅ Valid
        // fetchAPI("PATCH /users"); // ❌ Error: "PATCH" is not a valid HTTPMethod        
    }

    /**
     * Extracting and Manipulating String Types
     */
    static ExtractingAndManipulatingStringTypes = () => {

        type ExtractPath<T> = T extends `${infer Route}-route` ? Route : never;

        type UserRoute = ExtractPath<"users-route">; // "users"
        type InvalidRoute = ExtractPath<"unknown-path">; // never

    }

    /**
     * Mapping Over Object Keys
     * Use template literals to modify object property keys dynamically.
     */
    static MappingOverObjectKeys = () => {

        type User = {
            id: number;
            name: string;
        };
        
        type PrefixedUser = {
            [K in keyof User as `user_${K}`]: User[K];
        };
        
        const user: PrefixedUser = {
            user_id: 1,
            user_name: "Alice"
        };
        
    }
}