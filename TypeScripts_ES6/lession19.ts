class Person {
        constructor(name: string) {
                console.log(name + "Person constructor");
        }
        getId() {
                return 10;
        }
}
class Employee extends Person {
        constructor(name: string) {
                super(name);
                console.log("Constructor Employee");
        }
        getId() {
                return super.getId();
        }
}

let emp = new Employee("Name");
console.log(emp.getId());

