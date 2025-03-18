# `Required<T>`

## What is `Required<T>`?

> The Required<T> utility type converts all optional properties of T into required properties.
It ensures that every field in an object must be explicitly provided.

### Syntax

```typescript
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

 ### Key Features:
✅ Ensures all properties are mandatory.
✅ Helps with validations and strict object definitions.
✅ Avoids optional (?) properties.

## `Required<T>` vs `Partial<T>`

| Utility Type | What It Does                | Use Case                |
|--------------|-----------------------------|-------------------------|
| `Required<T>`| Makes all properties mandatory | Strict object validation |
| `Partial<T>` | Makes all properties optional | Flexible object updates  |


## When to Use `Required<T>`?

✅ When ensuring all properties are explicitly provided.
✅ When handling API responses where missing fields are not allowed.
✅ When enforcing strict object validation in forms.
✅ When preventing undefined values in function parameters.