const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "my data";
    if (data) resolve(data);
    else reject("failed to fetch");
  });
};

const getPromise = async (): Promise<void> => {
  const data = await makePromise();
  console.log(data);
};

// how to fetch data in real app

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async (): Promise<DataType> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const data = fetchData();
