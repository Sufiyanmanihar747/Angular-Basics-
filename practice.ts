function getTime(): number {
  return 1;
}

function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(2, 5)) //7


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

let x: unknown = 'hello';
console.log((<string>x).length);

class Person {
  name1: string;
}
const person = new Person();
person.name1 = "Jane";



class Person2 {
  // name is a private member variable
  public constructor(private name: string) { }
  public getName(): string {
    return this.name;
  }
}
const person2 = new Person2("Jane");
console.log(person2.getName());


// PASSING TYPE WHEN FUNCTION CALL 
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };


// CUSTOM TYPE USING INTERFACES
interface Car1 {
  make: string;
  model: string;
  mileage?: number;
}
let myCar: Required<Car1> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000
};
console.log(myCar); //{ make: 'Ford', model: 'Focus', mileage: 12000 }

// RECORD 
//Record is a shortcut to defining an object type with a specific key type and value type.
const nameAge: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
}