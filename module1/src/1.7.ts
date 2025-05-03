{
  // spread operator, rest operator,Destructuring

  // spread operator
  const vaiBrother = ["Sufian", "Omar", "Rifat"];
  const vaiBrothers = ["Rasel", "Rakib", "Rashed"];

  vaiBrother.push(...vaiBrothers);

  const bros = [...vaiBrother, ...vaiBrothers];
  console.log(vaiBrother);

  type teacher = {
    english: string;
    math: string;
    dsa: string;
  };

  const instructor: teacher = {
    english: "Mainul",
    math: "Anowar",
    dsa: "Munna",
  };
  const instructor2: teacher = {
    english: "Nazmul",
    math: "Bimol",
    dsa: "Tahzib",
  };

  const allTeacher = {
    ...instructor,
    ...instructor2,
  };

  console.log(allTeacher);

  //Rest Oparetor

  const friends = (...friend: string[]) => {
    return friend;
  };
  friends("rohim", "korim");
}
