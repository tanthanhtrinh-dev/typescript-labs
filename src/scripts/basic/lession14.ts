let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
//let { , second, } = o;
console.log(a);
console.log(b);

let ojectName = {
    firstname: "Tan",
    level: 12,
    lastname: "trinh"
};

let { firstname: ten, lastname:ho } = ojectName;

//let { , second, } = o;

console.log(ten);
console.log(ho);