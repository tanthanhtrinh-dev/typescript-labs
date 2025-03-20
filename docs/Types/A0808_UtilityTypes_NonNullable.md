# `NonNullable<Type>`

## What is `NonNullable<Type>`?

> The `NonNullable<Type>` utility type removes null and undefined from a given type, ensuring the value is always defined.

### Syntax

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
```

### Key Features

✅ Ensures values are always defined.
✅ Prevents runtime errors from `null` and `undefined`.
✅ Useful for strict type safety in function returns and API responses.

## `NonNullable<T>` vs `Required<T>`

### Comparison Table: `NonNullable<T>` vs `Required<T>`

| Utility Type      | Description                          | Use Case                          |
|-------------------|--------------------------------------|-----------------------------------|
| `NonNullable<T>`  | Removes `null` and `undefined`      | Ensuring valid values            |
| `Required<T>`     | Makes all properties mandatory      | Preventing missing fields        |

**Example Comparison**

```typescript
interface User {
    id?: number;
    name?: string | null;
}

type NoNulls = { [K in keyof User]: NonNullable<User[K]> };
type FullyRequired = Required<User>;
```

## When to Use `NonNullable<T>`?

✅ When removing null and undefined from types.
✅ When ensuring function parameters always have a value.
✅ When working with API responses that must be non-null.
✅ When creating strict object definitions where null values are not allowed.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
| Removes `null` and `undefined` | Ensures valid values in variables        |
| Prevents `null` function arguments | Enforces strict function inputs         |
| Works well with API responses  | Avoids handling null data from APIs      |
| Alternative to `Exclude<T, null | undefined>` | Simplifies type definitions |
