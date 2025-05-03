type user1 = {
  name: string;
  email: string;
};

interface user2 {
  name: string;
  email: string;
}

interface userWithRoll2 extends user2 {
  roll: number;
}

type userWithRoll = user1 & { roll: number };

const person1: userWithRoll = {
  name: "sufian",
  email: "s@gmail.com",
  roll: 32,
};
