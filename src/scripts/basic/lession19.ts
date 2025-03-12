class Person01 {
        constructor(name: string) {
                console.log(name + "Person constructor");
        }
        getId() {
                return 10;
        }
}
class Employee extends Person01 {
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

