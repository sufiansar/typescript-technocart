// Task 3: Object Types, Type Alias, & Literal Types
/*Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense,
 Hobbies,
 Family Members, Job, Skills, Marital Status, and Friends.
*/

{
  //

  type user = {
    name: string;
    presenAddress?: string;
    permanentAddress?: string;
    hair: "black" | "gray" | "yewllo";
    eye: "catEye" | "black" | "blue";
    income: number;
    hobbies?: string;
    familyMember: number;
    job?: string;
    skill?: string;
    friends?: string;
  };

  const person1: user = {
    name: "sufian",
    hair: "black",
    eye: "black",
    income: 20000,
    familyMember: 7,
  };

  //
}
