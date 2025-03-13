function create<Type>(c: { new (): Type }): Type {
  return new c();
}

export class BeeKeeper {
  hasMask: boolean = true;
}
 
export class ZooKeeper {
  nametag: string = "Mikle";
}
 
export class Animal {
  numLegs: number = 4;
}

export class Cat extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

export class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
export class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
export function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;