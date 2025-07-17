type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//     name : string,
//     expertise: string,
//     experience : number
// }

// intersection
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadership: boolean;
  level: "junior" | "mid" | "senior";
};

// union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "junoir",
  expertise: "junior",
  experience: 6,
};

const develper: NextLevelDeveloper = {
  name: "junoir",
  expertise: "junior",
  experience: 6,
  leadership: true,
  level: "junior",
};
