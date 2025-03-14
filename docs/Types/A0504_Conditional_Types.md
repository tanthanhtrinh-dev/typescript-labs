# [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

## What is `typeof` in TypeScript

> **Conditional Types** in TypeScript allow you to **define types dynamically based on conditions**. This feature helps create **flexible, reusable, and type-safe** structures in complex applications.

**_Syntax:_**

```typescript
T extends U ? X : Y;
```

- If `T` extends `U` → return `X`
- Otherwise → return `Y`


## Basic Example

```typescript

type CheckType<T> = T extends string ? "Text" : "Not Text";

type A = CheckType<string>;  // "Text"
type B = CheckType<number>;  // "Not Text"

```
