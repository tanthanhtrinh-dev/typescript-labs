# Generics


- **Without Type**

```typescript

function identity(arg: number): number {
  return arg;
}

function identity(arg: any): any {
  return arg;
}
```

- **With Type**

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

## Working with Generic Type Variables

**_For Example_**

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}


function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

## Generic Types

From 

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

To

```typescript
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;
```

or To

```typescript
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
```

## Generic Classes

**For example**

- **Simple**

```typescript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

## Generic Constraints

**For example**

```typescript
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

## Using Type Parameters in Generic Constraints

```typescript
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m"); // Don't have the key of m
```

## Using Class Types in Generics

- **For example**

```typescript
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
```

- **A more advanced example**

