# `Omit<Type, Keys>`

## What is `Omit<Type, Keys>`?

> The `Omit<Type, Keys>` utility type removes specific properties (`Keys`) from an existing type (`Type`), leaving only the remaining ones.

### Syntax

```typescript
type Omit<Type, Keys extends keyof Type> = {
    [P in Exclude<keyof Type, Keys>]: Type[P];
};
```

### Key Features:

✅ Removes unwanted properties from an existing type.
✅ Prevents exposure of sensitive data.
✅ Helps create modified versions of types for different use cases.

## `Omit<T, K>` vs `Pick<T, K>`

| Utility Type | What It Does                | Use Case                |
|--------------|-----------------------------|-------------------------|
| Omit<T, K>   | Removes specific properties | Hiding sensitive data   |
| Pick<T, K>   | Selects only certain properties | Extracting required fields |

**Example Comparison**

```typescript
type UserPreview = Pick<User, "id" | "name">; // Keeps only 'id' & 'name'
type UserWithoutEmail = Omit<User, "email">; // Removes 'email'
```

## When to Use `Omit<T, K>`?

✅ When removing sensitive or unnecessary fields.
✅ When ensuring certain properties are immutable.
✅ When working with different object representations in APIs.
✅ When simplifying database models or UI components.


## Summary

| Feature                                           | Description                                                  |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Creates a new type by removing specific properties | Prevents accidental usage of unwanted fields |
| Useful in API responses and database models | Ensures only relevant fields are sent |
| Works on shallow properties | Needs `DeepOmit<T, K>` for nested objects |
| Prevents modifying restricted properties | Helps enforce immutability |

