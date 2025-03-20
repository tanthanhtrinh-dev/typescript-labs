# `InstanceType<Type>`

## What is `InstanceType<Type>`?

> The `InstanceType<Type>` utility type extracts the instance type of a class constructor.

### Syntax

```typescript
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

```

### Example Sample

```typescript
class User {
    constructor(public name: string, public age: number) {}
}

type UserInstance = InstanceType<typeof User>;

const user: UserInstance = new User("Alice", 30); // ✅ Works
// const invalidUser: UserInstance = { name: "Bob" }; // ❌ Error: 'age' is missing

```

### Key Features

✅ Extracts the type of an instance from a class constructor.
✅ Ensures type-safe instantiations of classes.
✅ Useful for dependency injection, factory functions, and reflection.

**Example Comparison `InstanceType<T>` vs `ConstructorParameters<T>`**

| Utility Type   | What It Does                              | Use Case                          |
|----------------|-------------------------------------------|------------------------------------|
| `InstanceType<T>`  | Extracts class instance type | Factory functions, dependency injection     |
| `ConstructorParameters<T>`  | Extracts constructor arguments         | Class instantiation with correct parameters      |

```typescript
type UserInstanceType = InstanceType<typeof User>; // ✅ User
type UserConstructorParams = ConstructorParameters<typeof User>; // ✅ [string, number]
```

## When to Use `InstanceType<T>`?

✅ When ensuring a variable is a valid class instance.
✅ When creating factory functions that return class instances.
✅ When using dependency injection to inject service instances.
✅ When working with singletons or reflection-based logic.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
|Extracts class instance types |	Ensures objects conform to class structure|
|Works with abstract classes	| Useful for enforcing class hierarchies|
|Helps in dependency injection	| Ensures correct service instances|
|Prevents invalid instance creation	| Improves type safety|
