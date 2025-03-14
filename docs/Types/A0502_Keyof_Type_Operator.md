# [Keyof Type Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

## What is `keyof` in TypeScript

> The `keyof` operator returns a union of the keys from a given type.

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
