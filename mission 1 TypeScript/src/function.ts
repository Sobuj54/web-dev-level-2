// normal function
// default parameters are alaways assigned from the last
function add(a: number, b: number = 20): number {
  return a * b;
}
console.log(add(2, 4));
console.log(add(2));

// arrow function
const addval = (a: number, b: number): number => a + b;
console.log(addval(5, 6));

// callback
const arr: number[] = [2, 5, 6, 3];
const newArr: number[] = arr.map((val: number): number => val ** 2);
console.log(newArr);

// method
const person: {
  name: string;
  age: number;
  currentBalance: number;
  addBalance(num: number): void;
} = {
  name: "test",
  age: 30,
  currentBalance: 4000,
  addBalance(num: number) {
    console.log(`New balance is ${this.currentBalance + num}`);
  },
};

person.addBalance(3000);

// spread operator : it decouples an array into individual elements
const a = [2, 3, 4, 5];
const ab = [5, 6, 8];
ab.push(...a);
console.log("spreaded array: ", ab);

// rest operator : it binds all the parameters of funtion into an array.
const Friends = (...friends: string[]) => {
  console.log(friends); // [ 'rasel', 'rayhan', 'maruf' ]
  friends.forEach((friend: string) => console.log(friend));
};
Friends("rasel", "rayhan", "maruf");
