# [typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)

## What is `typeof` in TypeScript

> The `typeof` type operator in TypeScript is used to extract the type of a value or variable at compile time. This allows us to dynamically infer types from existing variables or functions instead of manually specifying them.

**_Syntax:_**

```typescript
type Keys = keyof Type;

```

## Basic Example

```typescript
type User = {
    id: number;
    name: string;
    age: number;
};

type UserKeys = keyof User; // "id" | "name" | "age"

let key: UserKeys;

key = "id"; // ✅ Valid
key = "name"; // ✅ Valid
// key = "email"; // ❌ Error: "email" is not in "id" | "name" | "age"

```
