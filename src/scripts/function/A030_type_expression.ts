/**
 * Function Type Expressions
 * @param fn 
 */
export function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

export function printToConsole(s: string) {
  console.log(s);
}

//greeter(printToConsole);