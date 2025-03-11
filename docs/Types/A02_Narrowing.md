# [Narrowing(thu hẹp kiểu)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

> Narrowing trong TypeScript là quá trình TypeScript thu hẹp một kiểu dữ liệu tổng quát (ví dụ: string | number) thành một kiểu cụ thể hơn (ví dụ: chỉ string hoặc chỉ number). Điều này giúp TypeScript hiểu rõ hơn về kiểu dữ liệu thực tế tại thời điểm runtime, từ đó hạn chế lỗi và hỗ trợ IntelliSense tốt hơn.
> Equality narrowing as `===`, `!==`, `==`, and `!=`
> Operator narrowing as `in`, `typeof`, `is`, `instanceof`, `never`

_Imagine we have a function called `printValue`_

Khi bạn khai báo một biến với Union Type, TypeScript không biết chính xác biến đó thuộc kiểu nào tại runtime. Ví dụ:

```typescript
function printValue(value: string | number) {
    console.log(value.toUpperCase()); // ❌ Lỗi: Property 'toUpperCase' does not exist on type 'string | number'.
}
```

Lỗi xảy ra vì TypeScript không thể đảm bảo rằng value luôn là string (vì có thể là number). Để khắc phục, ta cần dùng **Narrowing** để thu hẹp kiểu dữ liệu trước khi sử dụng.

### Assignments

```typescript
let x = Math.random() < 0.5 ? 10 : "hello world!";
//  ^?
x = 1;

console.log(x);
//          ^?
x = "goodbye!";

console.log(x);
//          ^?
```

### Control flow analysis

```typescript
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);
  //          ^?

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
    //          ^?
  } else {
    x = 100;
    console.log(x);
    //          ^?
  }

  return x;
  //     ^?
}
```

### Using type predicates

**_Syntax_**


```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

### Assertion functions

**_Syntax_**

`function assertName(value: unknown): asserts value is Type {}`