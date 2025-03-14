export class GenericNumber<NumType> {
    zeroValue: NumType | string | number = 0;
    add: (x: NumType, y: NumType) => NumType = (x, y) => (x);
}
   
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = (x, y) => {
//   return x + y;
// };
 
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));