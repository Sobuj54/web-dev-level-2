// nullable
const searchName = (name: string | null) => {
  if (name === null) console.log("this is null");
  else console.log("searching..");
};

searchName(null);

// unknown
const getCarSpeed = (val: unknown) => {
  if (typeof val === "number") console.log(`speed is ${val} km/h`);
  else if (typeof val === "string")
    console.log(`speed is ${val.split(" ")[0]} km/h`);
  else console.log("invalid");
};

getCarSpeed(10);
getCarSpeed("10 km/h");

// never type
const throwError = (message: string): never => {
  throw new Error(message);
};

throwError("error message");
