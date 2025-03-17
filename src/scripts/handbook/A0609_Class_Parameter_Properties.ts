class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


//3. Using private Parameter Properties
class BankAccount {
    constructor(private balance: number) { }

    getBalance(): number {
        return this.balance;
    }
}

//4. Using protected Parameter Properties
class Employee {
    constructor(protected salary: number) { }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(salary: number, private bonus: number) {
        super(salary);
    }

    getTotalCompensation(): number {
        return this.salary + this.bonus; // ✅ `salary` is accessible because it's `protected`
    }
}
//5. Using readonly Parameter Properties

class Product {
    constructor(public readonly id: number, public name: string) { }

    rename(newName: string): void {
        this.name = newName; // ✅ Allowed
        // this.id = 100; // ❌ Error: Cannot assign to 'id' because it is a read-only property
    }
}

//6. Combining Multiple Modifiers
class User2 {
    constructor(
        public readonly id: number,
        private password: string
    ) { }

    checkPassword(input: string): boolean {
        return this.password === input;
    }
}

export class ParameterPropertiesExample {


    static Sample() {
        const user = new User("Alice", 25);
        console.log(user.name); // ✅ "Alice"        
    }

    static UsingPrivateParameterProperties() {

        const account = new BankAccount(1000);
        console.log(account.getBalance()); // ✅ 1000
        // console.log(account.balance); // ❌ Error: Property 'balance' is private
    }

    static UsingProtectedParameterProperties() {
        const manager = new Manager(5000, 1000);
        console.log(manager.getTotalCompensation()); // ✅ 6000
        // console.log(manager.salary); // ❌ Error: Property 'salary' is protected
    }

    static UsingReadonlyParameterProperties() {

        const item = new Product(1, "Laptop");
        console.log(item.id); // ✅ 1
        // item.id = 2; // ❌ Error: Cannot modify a `readonly` property

    }

    static CombiningMultipleModifiers() {
        const user = new User2(101, "securePass");
        console.log(user.id); // ✅ 101
        // console.log(user.password); // ❌ Error: Property 'password' is private
        console.log(user.checkPassword("securePass")); // ✅ true
    }
}


