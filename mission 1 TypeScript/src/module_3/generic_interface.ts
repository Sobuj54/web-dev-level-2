interface GenericInterface<T> {
  name: string;
  location: T;
}

const jamesBond: GenericInterface<string> = {
  name: "james bond",
  location: "italy",
};

const jogaVai: GenericInterface<number> = {
  name: "joga vai",
  location: 13.5,
};
