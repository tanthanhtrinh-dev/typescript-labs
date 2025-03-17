
# Class Expressions in TypeScript

## What is a Class Expression?

> **A Class Expression** in TypeScript is a way to define a class as a value (just like function expressions). This makes classes more flexible because they can be assigned to variables, used in higher-order functions, or created anonymously.

**Syntax**

```typescript
const ClassName = class {
    // Class body
};

```

## Key Features:

- Can be named or anonymous.
- Can be assigned to a variable.
- Can be passed as an argument to functions.
- Works the same as class declarations, but more flexible.

## Basic Example: Anonymous Class Expression

```typescript
const User = class {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
};

const user = new User("Alice");
console.log(user.greet()); // ✅ "Hello, Alice!"

```

## Named Class Expression

> YYou can also name a class inside an expression.


```typescript
const User = class UserClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
};

const user = new User("Bob");
console.log(user.greet()); // ✅ "Hello, Bob!"
// console.log(UserClass); // ❌ Error: 'UserClass' is not defined (only accessible inside the class)

```