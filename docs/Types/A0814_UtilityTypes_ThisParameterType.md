# `ThisParameterType<Type>`

## What is `ThisParameterType<Type>`?

> The `ThisParameterType<Type>` utility type extracts the type of the `this` parameter from a function type.

### Syntax

```typescript
type ThisParameterType<T> = T extends (this: infer U, ...args: any) => any ? U : unknown;

```

### Example Sample

- Example: Extracting `this` Parameter Type

```typescript
class User {
    name = "Alice";

    greet(this: User, greeting: string) {
        return `${greeting}, ${this.name}`;
    }
}

type UserThis = ThisParameterType<typeof User.prototype.greet>; // ✅ User

```

### Key Features

✅ Extracts the type of this used inside a function.
✅ Helps define method types explicitly.
✅ Useful in class-based function contexts and decorators.

**Example Comparison `ThisParameterType<T>` vs `OmitThisParameter<T>`**

| Utility Type   | What It Does                              | Use Case                          |
|----------------|-------------------------------------------|------------------------------------|
|`ThisParameterType<T>` |	Extracts the this parameter type |	Function binding, decorators|
|`OmitThisParameter<T>` |	Removes this from a function type |	Function transformation for binding|

```typescript
type WithThis = ThisParameterType<typeof User.prototype.greet>; // ✅ User
type WithoutThis = OmitThisParameter<typeof User.prototype.greet>; // ✅ (greeting: string) => string
```

## When to Use `ThisParameterType<T>`?

✅ When working with class methods that rely on `this`.
✅ When modifying functions using decorators or wrappers.
✅ When creating function binding utilities.
✅ When ensuring explicit `this` types in method definitions.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
|Extracts this parameter type	| Helps with function binding|
|Works with class methods	| Ensures correct this context|
|Useful in decorators	| Maintains method behavior in class decorators|
|Arrow functions return unknown	| Because they do not have their own this|
