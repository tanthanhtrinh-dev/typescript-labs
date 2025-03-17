const User3 = class {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
};

//Using Class Expressions in Functions

function createUserClass(role: string) {

    return class {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        getRole() {
            return `${this.name} is a ${role}`;
        }
    };
}

//Using Class Expressions as Arguments
function createInstance(cls: { new(name: string): any }) {
    return new cls("David");
}

const Person = class {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
};

//Extending a Class Expression
const BaseClass = class {
    greet() {
        return "Hello from Base!";
    }
};

const SubClass = class extends BaseClass {
    greetLoud() {
        return this.greet().toUpperCase();
    }
};

//Using Class Expressions Inside Objects
const models = {
    User: class {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    },
    Admin: class {
        role: string;
        constructor(role: string) {
            this.role = role;
        }
    }
};

export class ClassExpressExample {

    static Simple = () => {
        const user = new User3("Alice");
        console.log(user.greet()); // ✅ "Hello, Alice!"
    }

    static UsingClassExpressInFunctions() {

        const AdminUser = createUserClass("Admin");
        const admin = new AdminUser("Charlie");
        console.log(admin.getRole()); // ✅ "Charlie is a Admin"
    }

    static UsingClassExpressionAsArguments() {
        const person = createInstance(Person);
        console.log(person.name); // ✅ "David"
    }

    static UsingExtendingClassExpress() {
        const obj = new SubClass();
        console.log(obj.greetLoud()); // ✅ "HELLO FROM BASE!"
    }

    static UsingClassExpressionsInsideObjects() {
        const user = new models.User("Eve");
        const admin = new models.Admin("SuperAdmin");

        console.log(user.name); // ✅ "Eve"
        console.log(admin.role); // ✅ "SuperAdmin"
    }

}
