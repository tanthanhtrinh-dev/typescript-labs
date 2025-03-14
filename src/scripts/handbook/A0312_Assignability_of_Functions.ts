type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};


function f4(): void {
    // @ts-expect-error
    return true;
  }
   
  const f5 = function (): void {
    // @ts-expect-error
    return true;
  };