# Utility Types

## Awaited

### Basic Usage

```typescript
type Example = Awaited<Promise<string>>; // "string"
```

### Using `Awaited<T>` with Async Functions

```typescript
async function fetchUser(): Promise<{ id: number; name: string }> {
    return { id: 1, name: "Alice" };
}

type UserType = Awaited<ReturnType<typeof fetchUser>>;
// Equivalent to: { id: number; name: string }

const user: UserType = { id: 2, name: "Bob" }; // ✅ Correct structure

```
