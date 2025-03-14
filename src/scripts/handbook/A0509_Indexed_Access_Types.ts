

export class IndexedAccessTypesExample{
    constructor() {
        console.log("IndexedAccessTypesExample constructor");
    }

    static Simple = () => {
        type Person = { age: number; name: string; alive: boolean };
        type Age = Person["age"];
    }

    /**
     * The indexing type is itself a type, so we can use unions, keyof, or other types entirely:
     */
    static UnionKeyOf = () => {

        type Person = { age: number; name: string; alive: boolean };

        type I1 = Person["age" | "name"]; //type I1 = string | number
         
        type I2 = Person[keyof Person]; //type I2 = string | number | boolean
         
        type AliveOrName = "alive" | "name";
        type I3 = Person[AliveOrName]; //type I3 = string | boolean

    }

}