# [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

## What is Mapped Types in TypeScript

> **Mapped Types** in TypeScript allow you to create new types based on existing ones by transforming the properties dynamically. They are particularly useful for modifying object types in a scalable way.

**_Syntax:_**

```typescript
type NewType<T> = {
    [K in keyof T]: NewValueType;
};
```

- If `T` extends `U` → return `X`
- Otherwise → return `Y`


## Basic Example

```typescript

type User = {
    id: number;
    name: string;
    age: number;
};

// Create a type where all properties are optional
type PartialUser = {
    [K in keyof User]?: User[K];
};

const user1: PartialUser = {
    name: "Alice" // ✅ No error, all properties are optional
};


```
