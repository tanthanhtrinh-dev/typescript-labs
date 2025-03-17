
# Constructor Signatures in TypeScript

## What is a Constructor Signatures?

> A constructor signature in TypeScript defines the structure of a class constructor but does not implement it. It is mainly used in interfaces, abstract classes, and function types to enforce consistency when creating class instances.

**Syntax**

```typescript
interface ClassInterface {
    new (param1: Type, param2: Type): ClassInstanceType;
}
```

## Key Features:

- Declares how a class should be instantiated.
- Does not contain implementation (only defines the shape).
- Useful for dependency injection and factory patterns.

## Basic Example: Anonymous Class Expression

```typescript
interface UserConstructor {
    new (name: string, age: number): User;
}

class User {
    constructor(public name: string, public age: number) {}
}

const createUser = (Ctor: UserConstructor): User => {
    return new Ctor("Alice", 25);
};

const user = createUser(User);
console.log(user.name); // ✅ "Alice"

```

## Named Class Expression

> You can also name a class inside an expression.

## Constructor Signature in Interfaces

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

## Using Constructor Signatures in Abstract Classes

```typescript
abstract class Shape {
    constructor(public color: string) {}
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle("red", 10);
console.log(circle.getArea()); // ✅ 314.16

```

## Constructor Signature with Generics

## Enforcing Constructor Parameters

## Constructor Signature in Factory Functions

## Constructor Signature with `typeof`
