# `ConstructorParameters<Type>`

## What is `ConstructorParameters<Type>`?

> The `ConstructorParameters<Type>` utility type extracts **the parameter types of a class constructor** as a tuple.

### Syntax

```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```

### Example Sample

```typescript
class User {
    constructor(public name: string, public age: number) {}
}

type UserParams = ConstructorParameters<typeof User>;

const userArgs: UserParams = ["Alice", 30]; // ✅ Works
// const invalidUserArgs: UserParams = [30, "Alice"]; // ❌ Error: Incorrect order

```

### Key Features

✅ Extracts constructor argument types as a tuple.
✅ Ensures proper instantiation of classes.
✅ Useful for dependency injection, class factories, and reflection.

**Example Comparison**

| Utility Type   | What It Does                              | Use Case                          |
|----------------|-------------------------------------------|------------------------------------|
| `Parameters<T>`  | Extracts parameters of a function as a tuple | Function wrapping, decorators     |
| `ReturnType<T>`  | Extracts return type of a function         | Type-safe function chaining       |

```typescript
function multiply(a: number, b: number): number {
    return a * b;
}

type MultiplyParams = Parameters<typeof multiply>; // ✅ [number, number] `input of function`
type MultiplyReturn = ReturnType<typeof multiply>; // ✅ number `out or return value`

```

## When to Use `ConstructorParameters<T>`?

✅ When instantiating classes dynamically.
✅ When creating factory functions or dependency injectors.
✅ When ensuring type safety for class arguments.
✅ When working with decorators or proxies.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
|Extracts constructor arguments as a tuple	| Ensures proper class instantiation|
|Works with factory functions	| Reduces type duplication|
|Useful for dependency injection	| Ensures correct dependencies|
|Prevents invalid constructor calls	| Improves runtime validation|
