// normal arrow function
const createArray = (val: string): string[] => [val];

// arrow function with generic type
const createArray1 = <T>(val: T): T[] => [val];

// function with generic type
function createArray2<T>(val: T): T[] {
  return [val];
}

const result1 = createArray1<string>("hello");
const result2 = createArray1<boolean>(true);
