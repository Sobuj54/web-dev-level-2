class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): void {
    console.log(`${this.name} will sleep for ${hours} hours`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student = new Student("sobuj", 25, "dhaka");
student.makeSleep(10);

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numberOfClasses: number): void {
    console.log(`${this.name} will take ${numberOfClasses} classes`);
  }
}

const teacher = new Teacher("rai", 27, "dhaka", "teacher");
teacher.makeSleep(8);
teacher.takeClasses(3);
