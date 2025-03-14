export function identity<Type>(arg: Type): Type {
    return arg;
}

//let myIdentity: <Input>(arg: Input) => Input = identity;

export interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

//let myIdentity01: GenericIdentityFn<number> = identity;
