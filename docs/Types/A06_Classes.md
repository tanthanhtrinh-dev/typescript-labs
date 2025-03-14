
# [Classes in TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members)

## What is a Class?

> A class is a reusable template for creating objects that share common behavior.

## Basic Example
```typescript
class ClassName {
    property: Type;
    constructor(param: Type) {
        this.property = param;
    }
    method(): ReturnType {
        return this.property;
    }
}
```

## Access Modifiers (`public`, `private`, `protected`)

## Access Modifiers (`public`, `private`, `protected`)

| Modifier   | Description                                | Accessible from Class? | Accessible from Subclass? | Accessible from Outside? |
|------------|--------------------------------------------|------------------------|---------------------------|--------------------------|
| public     | Default modifier, accessible everywhere.   | ✅ Yes                 | ✅ Yes                    | ✅ Yes                   |
| private    | Accessible only inside the class.          | ✅ Yes                 | ❌ No                     | ❌ No                    |
| protected  | Accessible inside the class & subclasses.  | ✅ Yes                 | ✅ Yes                    | ❌ No                    |

**Example: Using Access Modifiers**

```typescript
class Employee {
    public name: string;  // Can be accessed anywhere
    private salary: number;  // Can only be accessed inside the class
    protected department: string;  // Accessible in subclasses

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary(): number {
        return this.salary; // ✅ Allowed inside the class
    }
}

class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
        super(name, salary, department);
    }

    getDepartment(): string {
        return this.department; // ✅ Allowed inside subclass
    }
}

const emp = new Employee("Alice", 50000, "HR");
console.log(emp.name); // ✅ "Alice"
// console.log(emp.salary); // ❌ Error: Property 'salary' is private
// console.log(emp.department); // ❌ Error: Property 'department' is protected

```


### Example: Using Access Modifiers


class Config {
    static readonly API_URL: string;
    static readonly TIMEOUT: number = 5000;

    static {
        Config.API_URL = process.env.API_URL || "https://default-api.com";
        console.log("Static block executed!");
    }
}

console.log(Config.API_URL); // ✅ "https://default-api.com"
console.log(Config.TIMEOUT); // ✅ 5000
