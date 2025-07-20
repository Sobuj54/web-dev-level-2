class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} is make ${this.sound}`);
  }
}

const dog = new Animal("bull dog", "dog", "ghew ghew");
dog.makeSound();
