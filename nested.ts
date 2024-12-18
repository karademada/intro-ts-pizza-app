type Address = {
  street: string;
  city: string;
  country: string;
  address?: Address;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "John Doe",
  age: 30,
  isStudent: true,
};

let person2: Person = {
  name: "Jane Smith",
  age: 25,
  isStudent: false,
  address: {
    street: "456 Oak Rd",
    city: "Sometown",
    country: "USA",
  },
};


const printPerson = (person: Person) => {
    console.log(`Address: ${person.address?.street}`)
}

printPerson(person1)

import { getPizzaDetail } from ".";
console.log(getPizzaDetail(''))