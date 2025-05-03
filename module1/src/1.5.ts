// object optional and litarel types

const myNameS: {
  company: "hexasoftBd"; //When a value itself is used as a type, it's called a literal type.
  firstName: string;
  middleName?: string; //When a property or parameter may or may not be provided, it is called optional.
  lastName: string;
} = {
  company: "hexasoftBd",
  firstName: "Md.",
  middleName: "Abu",
  lastName: "sufian",
};
myNameS;
