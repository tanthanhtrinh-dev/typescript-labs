/**
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments
 * 
 * 
 */

function multiply(n: number, ...m: number[]): number[] {
  return m.map((x) => n * x);
}


/**
 * Rest Parameters
 */
export function exampleRestParameter(): void {
  // 'a' gets value [10, 20, 30, 40]
  const data = multiply(10, 1, 2, 3, 4) as number[];
  console.info(data); // [10, 20, 30, 40] 

  // Inferred type is number[] -- "an array with zero or more numbers",
  // not specifically two numbers
  // const args = [8, 5];
  // const angle = Math.atan2(...args);

  // Inferred as 2-length tuple
  const argsFix = [8, 5] as const;
  // OK
  const angleFix = Math.atan2(...argsFix);
}

//Rest Arguments
export function exampleRestArgument(): void {  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr1.push(...arr2);
  console.info(arr1);
}

