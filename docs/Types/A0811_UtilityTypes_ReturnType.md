# `ReturnType<Type>`

## What is `ReturnType<Type>`?

> The `ReturnType<Type>` utility type extracts the return type of a function.

### Syntax

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

### Example Sample

```typescript
function getUser(): { id: number; name: string } {
    return { id: 1, name: "Alice" };
}

type UserReturn = ReturnType<typeof getUser>;

const user: UserReturn = { id: 2, name: "Bob" }; // ✅ Works
// const invalidUser: UserReturn = { id: 3 }; // ❌ Error: Missing 'name'

```

### Key Features

✅ Extracts the return type of a function.
✅ Ensures type safety in function results.
✅ Useful for reusing return types in multiple places.

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

## When to Use `ReturnType<T>`?

✅ When reusing function return types.
✅ When creating function wrappers.
✅ When working with API responses.
✅ When extracting return types from third-party functions.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
|Extracts function return type	| Ensures consistent results|
|Works with async functions	| Extracts `Promise<T>` results|
|Useful in API responses	| Avoids type duplication|
|Alternative to manual return types	| Reduces maintenance effort|
