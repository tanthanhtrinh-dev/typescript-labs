type SomeObject = any;

type SomeConstructor = {
  new (s: string): SomeObject;
};

export function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}