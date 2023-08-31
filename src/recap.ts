const myName = 'yo mero';
const myAge = 27;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(4, 1);

console.log(myName, myAge);

class Persona {
  constructor(
    private age: number,
    public name: string,
    private cel: number,
  ) {}

  getSummary() {
    return `name: ${this.name} age: ${this.age} cel: ${this.cel}`;
  }
}

const persona = new Persona(15, 'luis', 33123345);
persona.getSummary();
persona.name;
