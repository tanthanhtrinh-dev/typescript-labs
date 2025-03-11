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
