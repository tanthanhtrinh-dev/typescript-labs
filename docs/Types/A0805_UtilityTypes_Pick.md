# `Pick<Type, Keys>`

## What is `Pick<Type, Keys>`?

> The `Pick<Type, Keys>` utility type **creates a new type by selecting only specific properties (`Keys`) from an existing type (`Type`)**.

### Syntax

```typescript
type Pick<Type, Keys extends keyof Type> = {
    [P in Keys]: Type[P];
};

```

### Key Features:

✅ Extracts only selected properties from an existing type.
✅ Helps reduce unnecessary data in APIs and DTOs.
✅ Useful for creating different views of the same object.


## `Pick<T, K>` vs `Omit<T, K>`

| Utility Type | What It Does                        | Use Case                  |
|--------------|-------------------------------------|---------------------------|
| Pick<T, K>   | Selects only the specified properties | Extracting required fields |
| Omit<T, K>   | Removes specified properties from an object | Hiding sensitive fields    |


```typescript
type UserPreview = Pick<User, "id" | "name">; // Keeps only 'id' & 'name'
type UserWithoutEmail = Omit<User, "email">; // Removes 'email'
```


## When to Use `Pick<T, K>`?

✅ When extracting specific fields from an object.
✅ When defining DTOs for APIs or database models.
✅ When working with form data that only needs certain fields.
✅ When restricting function parameters to a subset of object properties.


## Summary

| Feature | Description |
| ------- | ----------- |
| Creates a new type from existing properties | Extracts only necessary fields |
| Useful in API responses and DTOs | Prevents unnecessary data exposure |
| Works on shallow properties | Needs `DeepPick<T, K>` for nested objects |
| Prevents adding unwanted properties | Ensures strict object structures |
