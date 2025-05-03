{
  //

  type GenericType<T> = Array<T>;

  const arrayGeneric: GenericType<number> = [2, 3, 2];
  const stringArry: GenericType<string> = ["mr.s", "ms.s"];

  const user1: GenericType<{ name: string; age: number; hobbie?: string }> = [
    {
      name: "sufian",
      age: 25,
      hobbie: "football",
    },

    {
      name: "rakib",
      age: 23,
    },
  ];
}
