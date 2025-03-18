# `Partial<T>`

## What is `Partial<T>`?

> The `Partial<T>` utility type converts all properties of T into optional properties.
> This is useful when you only need to update part of an object instead of providing all required fields.

### Syntax

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

 ### Key Features:

✅ Makes all properties optional.
✅ Helps with object updates and form handling.
✅ Prevents re-declaring interfaces with optional fields.



## When to Use `Partial<T>`?

✅ When updating objects without needing all properties.
✅ When handling optional form inputs.
✅ When working with APIs that allow partial updates.
✅ When creating flexible function parameters.