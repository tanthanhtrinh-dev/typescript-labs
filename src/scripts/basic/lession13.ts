var employee = ['name1 a','name2 b','name3 c'];
let [name1,name2,name3] = employee;
console.log(name1);
console.log(name2);
console.log(name3);

let [, second, , fourth] = [1, 2, 3, 4];

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

