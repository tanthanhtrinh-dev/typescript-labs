# [More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)

## Function Type Expressions

**_Example_**

```typescript
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

## Call Signatures

## Construct Signatures

## Generic Functions

### Inference (Tính suy luận)

**_Example_**

```typescript
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

### Constraints

### [Working with Constrained Values](https://www.typescriptlang.org/docs/handbook/2/functions.html#working-with-constrained-values)

### [Specifying Type Arguments](https://www.typescriptlang.org/docs/handbook/2/functions.html#specifying-type-arguments)

## Optional Parameters (Tham số tùy chọn)

**_Example_**

```typescript
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

### Optional Parameters in Callbacks

**_Example_**

```typescript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

## Function Overloads (Đa hình)


## [Declaring `this` in a Function](https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function)

**_Example_**

```typescript
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
```

**_Note that you need to use function and not arrow functions to get this behavior:_**

```typescript
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();

//Option 1
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

//Option 2
const admins = db.filterUsers(isAdmin);

function isAdmin(this: User) {
  return this.admin;
}

```

## [Other Types to Know About](https://www.typescriptlang.org/docs/handbook/2/functions.html#other-types-to-know-about)

**_As:_** `void`, `object`, `unknown`, `never` and `Function`