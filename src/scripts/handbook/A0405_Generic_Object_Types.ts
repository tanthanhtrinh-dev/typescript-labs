interface Box<Type> {
  contents: Type;
}
 
interface Apple {
  // ....
}
 
// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;


function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}


function doSomething(value: Array<string>) {
  // ...
}
 
let myArray00: string[] = ["hello", "world"];
 
// either of these work!
doSomething(myArray00);
doSomething(new Array("hello", "world"));


