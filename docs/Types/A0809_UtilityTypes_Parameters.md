# `Parameters<Type>`

## What is `Parameters<Type>`?

> The `Parameters<Type>` utility type extracts the parameter types of a function type as a tuple.

### Syntax

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

```

### Example Sample

```typescript
function greet(name: string, age: number) {
    return `Hello, ${name}. You are ${age} years old.`;
}

type GreetParams = Parameters<typeof greet>;

const args: GreetParams = ["Alice", 30]; // ✅ Correct
// const wrongArgs: GreetParams = [30, "Alice"]; // ❌ Error: Argument types are incorrect

```

### Key Features

✅ Extracts **all function parameters as a tuple**.
✅ Useful for **reusing parameter types** in different places.
✅ Helps in **higher-order functions, decorators, and type-safe function wrapping**.

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

## When to Use `NonNullable<T>`?

✅ When reusing function argument types.
✅ When creating wrapper functions or decorators.
✅ When working with event listeners and dynamic callbacks.
✅ When extracting types from third-party or unknown functions.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
|Extracts function parameters as a tuple	| Useful for reusable type definitions|
|Works with arrow functions and methods	| Supports all function types|
|Useful for event handlers and decorators |	Ensures type safety in callbacks|
|Alternative to manual type duplication	| Reduces maintenance overhead|
