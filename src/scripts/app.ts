
import { doSomething, exampleRestArgument, greeter, myFunc, printToConsole } from "./function/A03";
import { Bee, createInstance, GenericNumber, Lion } from "./function/A05";

console.info("Kick off the script");

//greetPerson("Tan Trinh 123");
//console.info(`${typeof(greetPerson)} - ${greetPerson.prototype.constructor.name}`);
//console.info(`${typeof(Person)} - ${Person.prototype.run.prototype.name}`);
//console.info(`${Person.prototype.run.prototype.name}`);
//greeter(printToConsole)

//doSomething(myFunc);

//exampleRestArgument();

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = (x, y) => {
//   return x + y;
// };
 
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

console.info("End of the script");
