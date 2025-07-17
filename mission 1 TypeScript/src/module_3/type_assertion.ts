let example: any;
example = "any text";

// this is known as type assertion
(example as string).length;
// same thing can be written as
<string>example.length;

function kgToGram(val: string | number): string | number | undefined {
  if (typeof val === "string")
    return `the converted value is ${parseFloat(val) * 1000}`;
  else if (typeof val === "number") return val * 1000;
}

const resultIsNumber = kgToGram(30) as number;
console.log("number result : ", resultIsNumber);

const resultIsString = <string>kgToGram("50");
console.log("string result : ", resultIsString);
