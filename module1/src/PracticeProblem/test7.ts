/*
Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
*/

{
  type AdminUser = {
    name: string;
    email: string;
    // admin?: string;
  };

  const user: AdminUser = {
    name: "Sufian",
    email: "sufina@gmail.com",

    admin1:
      "Thank you for your essential role in keeping everything running smoothly behind the scenes.",
  };

  const adminUser = {
    name: "osman",
    email: "osman@gmail.com",
    admin2:
      "Your support and attention to detail make all the difference—thank you for being the steady hand behind it all.",
  };

  const controlAdmin = user & adminUser;
}
