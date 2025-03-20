# `Record<Keys, Type>`

## What is `Record<Keys, Type>`?

> The `Record<Keys, Type>` utility type creates an object type where the keys are restricted to Keys, and the values are of type Type.

### Syntax

```typescript
type Record<Keys extends keyof any, Type> = {
    [K in Keys]: Type;
};
```

### Example

```typescript
type UserRoles = Record<"admin" | "editor" | "viewer", boolean>;

const roles: UserRoles = {
    admin: true,
    editor: false,
    viewer: true
};

const users: Record<number, string> = { 1: "Alice", 2: "Bob" };

```

### Key Features

✅ Ensures keys are predefined.
✅ Enforces consistent value types.
✅ Useful for dictionaries, mappings, and enums.

## `Record<K, T>` vs Other Utility Types

| Utility Type | What It Does | Use Case |
|--------------|--------------|----------|
| `Record<K, T>` | Defines an object with specific keys and value types | Dictionaries, mappings, API responses |
| `Partial<T>` | Makes all properties optional | Optional updates |
| `Pick<T, K>` | Selects specific properties from an existing type | DTOs (Data Transfer Objects) |
| `Omit<T, K>` | Removes specific properties from an existing type | Excluding sensitive fields |

## When to Use `Record<K, T>`?

✅ When defining dictionaries or mappings.
✅ When ensuring strict key-value pairs.
✅ When working with API response structures.
✅ When mapping Enums to specific values.

## Summary

| Feature                | Description                              |
|------------------------|------------------------------------------|
| Creates a structured object | Ensures predefined keys with strict value types |
| Prevents invalid keys  | Limits allowed keys to specified ones    |
| Works well with enums  | Ensures all enum values are mapped       |
| Great for API responses | Enforces a consistent format             |
