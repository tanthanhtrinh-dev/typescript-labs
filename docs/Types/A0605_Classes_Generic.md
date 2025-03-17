
# Generic Class

## What is a Generic Class?

> A Generic Class is a class that uses type parameters (`<T>`) to make its properties and methods type-flexible.

**Syntax**

```typescript
class ClassName<T> {
    property: T;
    constructor(value: T) {
        this.property = value;
    }
}
```

## Key Features:

- The type T can be replaced with any type when creating an instance.
- Prevents type mismatches while maintaining flexibility.

## Basic Example: A Generic Storage Class

```typescript
class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getItem()); // ✅ "Hello"

const numberBox = new Box<number>(42);
console.log(numberBox.getItem()); // ✅ 42

```

## Generic Classes with Multiple Type Parameters

> You can use multiple type parameters to enhance flexibility.


```typescript
class Pair<K, V> {
    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKeyValue(): string {
        return `${this.key}: ${this.value}`;
    }
}

const pair1 = new Pair<string, number>("Age", 30);
console.log(pair1.getKeyValue()); // ✅ "Age: 30"

const pair2 = new Pair<number, boolean>(1, true);
console.log(pair2.getKeyValue()); // ✅ "1: true"

```


## When to Use Generic Classes?

- When creating reusable data structures (e.g., `Stack<T>`, `Queue<T>`).
- When working with dynamic object types (e.g., API models).
- When ensuring type safety while maintaining flexibility.
- When designing consistent interfaces for different types.

