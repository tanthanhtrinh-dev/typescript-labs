# [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Types

### The primitives: `string`, `number`, and `boolean`

### Arrays, any

**_Syntax_**

```typescript
//Arrays
let myArr = [1, 2, 3];
let myArr01: number[] = [1, 2, 3];
let myArr02: Array<number> = [1, 2, 3];

//any
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

### Type Annotations on Variables (Gán kiểu dữ liệu trên biến )

**_Syntax_**

```typescript
let myName: string = "Alice";
// No type annotation needed -- 'myName' inferred as type 'string'
let myName1 = "Alice";
```

### Functions

**_Syntax_**

```typescript
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```
#### Return Type Annotations

**_Syntax_**

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

#### Functions Which Return Promises

**_Syntax_**

```typescript
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

#### Anonymous Functions

**_Syntax_**

```typescript
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

### Object Types

#### Optional Properties

**_Example_**

```typescript
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

#### Union Types

##### Defining a Union Type

**_Syntax_**

```typescript
function printTextOrNumberOrBool(textOrNumberOrBool: | string | number | boolean) {
  console.log(textOrNumberOrBool);
}
```

**_Example_**

```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

### Type Aliases

**_Syntax_**

```typescript
type Point = {
  x: number;
  y: number;
};
 
type ID = number | string;
```

### Interfaces

**_Syntax_**

```typescript
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

#### [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)





### Type Assertions

**_Syntax_**

```typescript

```

**_Example_**

```typescript
const x = "hello" as number;
```

### Literal Types (Giới hạn kiểu)
> We can refer to specific strings and numbers in type positions
> Giới hạn giá trị của biến chỉ được phép nhận một số giá trị cố định.

**_Example_**

```typescript
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

--
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");

/**
*
**/
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

```

#### Literal Inference (Suy luận _nghĩa đen_ )
- **Literal Inference** giúp TypeScript tự động giới hạn kiểu dữ liệu một cách an toàn.
- Dùng const để giữ nguyên kiểu literal, dùng `as const` cho object và mảng.
- Kết hợp với **Union Types** để tạo kiểu an toàn và dễ kiểm soát hơn.

**_Example_**

```typescript
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" } as const;
```
