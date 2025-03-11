export type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  
export function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
export function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
   


//doSomething(myFunc);