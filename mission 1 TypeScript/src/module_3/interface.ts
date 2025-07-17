// type alis
type User = {
  name: string;
  age: number;
};

// interface
interface IUser {
  name: string;
  age: number;
}

// interface can be inherited
interface extendedIUser extends IUser {
  salary: number;
}

const userWithTypeAlias: User = {
  name: "type alias",
  age: 500,
};

const userWithInterface: IUser = {
  name: "interface",
  age: 300,
};

const userWithExtendedIUser: extendedIUser = {
  name: "extended interface",
  age: 300,
  salary: 4000,
};
