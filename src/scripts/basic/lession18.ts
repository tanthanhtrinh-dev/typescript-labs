/**
 * 
 */
export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
    console.log(this.name + " constructor");
  }
  static talk() {
    console.log("this is static method talk");
  }
        run() {
    console.log("People is running");
  }
}
// let p = new People("Tai");
// People.talk();