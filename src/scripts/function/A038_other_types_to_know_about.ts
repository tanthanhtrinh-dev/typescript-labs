/**
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#other-types-to-know-about
 * 
 * 
 */

// The inferred return type is void
export function noop() {
  return;
}


//Example unknown
export function f1(a: any) {
  a.b(); // OK
}

// function f2(a: unknown) {
//   a.b();
// }

/**
 * never
 * @param msg 
 */
export function fail(msg: string): never {
  throw new Error(msg);
}

/**
 * Function type
 * @param f 
 * @returns 
 */
function doSomething(f: Function) {
  return f(1, 2, 3);
}