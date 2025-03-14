# [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

## What is Template Literal Types in TypeScript

> **Template Literal Types** in TypeScript allow you to dynamically generate string-based types using template literals (backticks ```), similar to JavaScript template literals.

**_Syntax:_**

```typescript
type NewType = `prefix_${ExistingType}`;

```



## Basic Example

> Creating Prefixed String Types
 
```typescript
type Size = "small" | "medium" | "large";
type ButtonVariant = `btn-${Size}`;

const btn1: ButtonVariant = "btn-small"; // ✅ Valid
const btn2: ButtonVariant = "btn-large"; // ✅ Valid
// const btn3: ButtonVariant = "btn-extra"; // ❌ Error: "btn-extra" is not assignable to ButtonVariant

```

