interface Iuser {
  firstName: string;
  lastName: string;
}

interface Imethod {
  fullName(): string;
}

interface Model<Iuser, Imethod> {
  data: Iuser;
  method: Imethod;
}

type model = Model<Iuser, Imethod>;

class advancePerson implements model {
  data: Iuser;
  method: Imethod;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.method = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const user12 = new advancePerson("sobuj", "ahmed");

console.log(user12.method.fullName());
