/**
 * https://www.typescriptlang.org/docs/handbook/2/functions.html
 * @param arr 
 * @returns 
 */

export function firstElement(arr: any[]) {
  return arr[0];
}

export function firstElement2<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}