# `Exclude<UnionType, ExcludedMembers>`

## What is `Exclude<UnionType, ExcludedMembers>`?

> The `Exclude<T, U>` utility type removes specified types (`U`) from a union type (`T`), leaving only the remaining types.

### Syntax

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

### Key Features:

✅ Removes unwanted types from a union.
✅ Creates stricter, more precise types.
✅ Useful in filtering types dynamically.

## `Exclude<T, U>` vs `Omit<T, K>`

| Utility Type | What It Does                | Use Case                |
|--------------|-----------------------------|-------------------------|
| Exclude<T, U>   | Removes types from a union | Filtering out unwanted values   |
| Omit<T, K>   | Removes properties from an object | Hiding sensitive data |

**Example Comparison**

```typescript
type UserRoles = "admin" | "editor" | "viewer";
type ExcludedRoles = Exclude<UserRoles, "admin">; // Removes "admin"
type UserWithoutPassword = Omit<User, "password">; // Removes password property
```

## When to Use `Exclude<T, U>`?

✅ When removing specific values from a union.
✅ When excluding null and undefined for strict type safety.
✅ When filtering API response types.
✅ When restricting function argument values.


## Summary

| Feature                                           | Description                                                  |
| ------------------------------------------------- | ------------------------------------------------------------ |
|Removes unwanted types from a union |	Creates stricter type definitions|
|Useful in function arguments	| Prevents invalid inputs|
|Filters out null and undefined	| Ensures values are always defined|
|Works well in API response handling	| Avoids unnecessary status codes|

