type MandatoryType = {
  name: string;
  age: number;
  hasJob: boolean;
};

const addMyInfo = <T extends MandatoryType>(myInfo: T) => {
  return { ...myInfo, isMarried: false };
};

type MyInfoType = {
  name: string;
  age: number;
  hasJob: boolean;
};

const myInfo = {
  name: "sobuj",
  age: 24,
  hasJob: false,
};

const newInfo = addMyInfo<MyInfoType>(myInfo);
