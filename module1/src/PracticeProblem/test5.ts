/*Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh"
*/

const reverseString = (inputvalue: string) => {
  const reverse = inputvalue.split("").reverse().join("");
  return reverse;
};

const result = reverseString("hello");
console.log(result);
