interface Persona {
  name: string;
  age?: number;
  contact: number;
}

// pick specific types from another interface to create a new type
type contactNo = Pick<Persona, "contact">;
type details = Pick<Persona, "name" | "age">;

// omit specific types from another interface to create a new type
type newDetails = Omit<Persona, "contact">;

// make all the fields optional
type makeOptional = Partial<Persona>;

// make all the fields required
type makeRequired = Required<Persona>;
