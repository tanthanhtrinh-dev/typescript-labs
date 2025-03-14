function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: "Alice", age: 25 };

console.log(getProperty(user, "name")); // ✅ Alice
console.log(getProperty(user, "age")); // ✅ 25
// console.log(getProperty(user, "email")); // ❌ Error: Argument of type '"email"' is not assignable to 'keyof User'
