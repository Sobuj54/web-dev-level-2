// type alias for common things

type CrushType = {
  name: string;
  age: number;
  profession: string;
};

const crush1: CrushType = {
  name: "jani na",
  age: 34,
  profession: "dhanda vaj",
};

const crush2: CrushType = {
  name: "kolli",
  age: 17,
  profession: "dhulki baji",
};

// type alias in function

type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
  console.log(`result ${operation(num1, num2)}`);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x * y);
