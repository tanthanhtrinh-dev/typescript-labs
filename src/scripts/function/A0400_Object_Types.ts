function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

  //using interface
  interface Person {
    name: string;
    age: number;
  }
   
  function greet2(person: Person) {
    return "Hello " + person.name;
  }

  //type alias
  type TypePerson = {
    name: string;
    age: number;
  };
   
  function greet3(person: TypePerson) {
    return "Hello " + person.name;
  }