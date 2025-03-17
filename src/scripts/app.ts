

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

// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;

//TypeOfExample.Simple();
//ConditionalTypesExample.workWithInferringTypes();

//StaticBlocksExample.RunApp();

//StaticBlocksExample.RunCountryCodes();

//StaticBlocksExample.RunCountryCodes();

//GenericClassExample.AvoidingThisIssues();

//ConstructorSignature.UsingEnforcingConstructorParameters();

//RelationshipsBetweenClasses.DependencyInjection();

import { add, multiply } from "./modules/A07";
import { greet } from "./modules/A07"
//import greet from "./modules/greetings"

// console.log(add(2, 3));       // ✅ 5
// console.log(multiply(4, 5));  // ✅ 20

console.log(greet("Charlie"));


console.info("End of the script");
