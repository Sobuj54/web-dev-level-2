class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count += 1);
  }
  static decrement() {
    return (Counter.count -= 1);
  }

  static square(x: number): number {
    return x * x;
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.square(10));
