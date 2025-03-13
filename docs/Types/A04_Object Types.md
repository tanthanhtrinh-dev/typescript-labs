# [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## [Property Modifiers](https://www.typescriptlang.org/docs/handbook/2/objects.html#property-modifiers)

## [Excess Property Checks](https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks)

## [Extending Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types)

> 

**_`interfaces` can also extend from a type_**

```typescript

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

```

**_`interfaces` can also extend from multiple types._**

```typescript
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```


## [Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

> An intersection type is defined using the & operator.


```typescript
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```


## [Interface Extension vs. Intersection](https://www.typescriptlang.org/docs/handbook/2/objects.html#interface-extension-vs-intersection)



## [Generic Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types)

