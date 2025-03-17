
# 

## What is a `static` Block?

> A `static` block is a code block inside a class that runs once when the class is loaded, before any instances are created.

**Syntax**

```typescript
class ClassName {
    static property = "value";

    static {
        // Initialization logic
    }
}

```

## Key Features:

- Runs only once, when the class is first loaded.
- Can access static properties and methods.
- Useful for complex static initialization.

## Basic Example: Initializing Static Properties

```typescript

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

```
