# `NoInfer<Type>`

## What is `NoInfer<Type>`?

> The `NoInfer<Type>` utility type prevents TypeScript from inferring a more generic type and forces explicit type checking.

### Syntax

```typescript
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

```

### Example Sample

- Example: Type Inference Without `NoInfer<T>`

```typescript
function setValue<T>(value: T, defaultValue: T): T {
    return value ?? defaultValue;
}

const result = setValue(42, "default"); // ❌ No error, but incorrect types

```

- Problem: TypeScript infers T as string | number, leading to unexpected mixed types.

```typescript
type NoInfer<T> = [T][T extends any ? 0 : never];

function setValueStrict<T>(value: T, defaultValue: NoInfer<T>): T {
    return value ?? defaultValue;
}

// const invalidResult = setValueStrict(42, "default"); // ❌ Error: "default" is not assignable to `number`
const validResult = setValueStrict(42, 100); // ✅ Works correctly

```

Why use NoInfer<T> here?

Forces both arguments to have the same exact type.
Prevents mixing unintended types in generic functions.

### Key Features

✅ Ensures a specific type is enforced instead of inferred generics.
✅ Useful for preserving expected types in generic functions.
✅ Helps in type constraints where inference leads to unintended behavior.

**Example Comparison `InstanceType<T>` vs `ConstructorParameters<T>`**

| Utility Type   | What It Does                              | Use Case                          |
|----------------|-------------------------------------------|------------------------------------|
|`NoInfer<T>`	| Prevents inference, enforces explicit types	| Ensuring argument types match generics|
|`Infer<T>`	| Extracts inferred types dynamically	| Pattern matching in conditional types|

```typescript
type ExtractType<T> = T extends Promise<infer U> ? U : never;
type PreventInference<T> = [T][T extends any ? 0 : never];

type AsyncResult = ExtractType<Promise<string>>; // ✅ string
type NoInference = PreventInference<number>; // ✅ Ensures number only

```

## When to Use `NoInfer<T>`?

✅ When forcing a function argument to match an explicit type.
✅ When preventing unintended type broadening in generics.
✅ When ensuring strict type constraints in function overloads.
✅ When working with default values in generic functions.

## Summary

| Feature                        | Description                              |
|--------------------------------|------------------------------------------|
|Prevents TypeScript from inferring a broader type	| Ensures explicit type enforcement|
|Useful for function parameters and defaults	| Avoids unintended widening of types|
|Works with generic constraints	| Improves type safety in overloaded functions|
|Alternative to stricter type annotations	| Reduces unexpected type errors|
