const user: {
  readonly name: string; // this field value can not be later on.
  age: number;
  isMarried: boolean;
  wifeName?: string; // this is a optional field
} = {
  name: "lala",
  age: 29,
  isMarried: true,
  wifeName: "rani",
};
