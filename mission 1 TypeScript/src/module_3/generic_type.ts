type GenericType<T> = Array<T>;

const numArray: GenericType<number> = [1, 3, 5];
const strArray: GenericType<string> = ["3", "4"];

type RollName = { name: string; roll: number };

const rollNameArray: GenericType<RollName> = [{ name: "lala", roll: 3 }];

// generic type with multiple parameter
type MultiType<X, Y> = [X, Y];

const multiTypeArray: MultiType<string, number> = ["hey", 12];
