class User {
    name: string;
    age?: number;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    isAdult(): this is { age: number } {
        return this.age !== undefined && this.age >= 18;
    }
}


// 4. Using this-Based Type Guards with Interfaces
interface ActiveUser {
    name: string;
    isActive: true;
}

class User2 {
    name: string;
    isActive?: boolean;

    constructor(name: string, isActive?: boolean) {
        this.name = name;
        this.isActive = isActive;
    }

    isActiveUser(): this is ActiveUser {
        return this.isActive === true;
    }
}

//5. this-Based Type Guards with Subclasses

class Animal {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    isDog(): this is Dog {
        return this instanceof Dog;
    }
}

class Dog extends Animal {
    bark(): string {
        return "Woof! 🐶";
    }
}

export class BasedTypeGuardExample {

    static Sample() {
        const user = new User("Alice", 20);

        if (user.isAdult()) {
            console.log(user.age); // ✅ `user` is now `{ age: number }`
        } else {
            console.log("User's age is not defined or under 18.");
        }
    }
    //4. Using this-Based Type Guards with Interfaces
    static TypeGuardWithInterface() {

        const user = new User2("Bob", true);

        if (user.isActiveUser()) {
            console.log(`${user.name} is active`); // ✅ `user` is treated as `ActiveUser`
        } else {
            console.log(`${user.name} is not active`);
        }
    }

    //5. this-Based Type Guards with Subclasses
    static TypeGuardWithSubclasses() {

        const pet = new Dog("dog");

        if (pet.isDog()) {
            console.log(pet.bark()); // ✅ Safe to call `bark()`
        }
    }
}
