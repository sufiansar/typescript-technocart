type Developer<T> = {
  name: string;
  skill: string;
  computer: {
    model: string;
    name: string;
    realeseYear: number;
  };

  smartWatch: T;
};
// type
type Watch = {
  name: string;
  realeseYear: number;
};

const developer1: Developer<Watch> = {
  name: "sufian",
  skill: "fontendDeveloper",
  computer: {
    model: "Hp-23H2",
    name: "gigabyte",
    realeseYear: 2020,
  },

  smartWatch: {
    name: "k92",
    realeseYear: 2022,
  },
};

// Interface

interface Watch2 {
  name: string;
  realeseYear: number;
  helth: number;
}

const developer2: Developer<Watch2> = {
  name: "sufian",
  skill: "fontendDeveloper",
  computer: {
    model: "Hp-23H2",
    name: "gigabyte",
    realeseYear: 2020,
  },

  smartWatch: {
    name: "Apple",
    realeseYear: 2022,
    helth: 500,
  },
};
