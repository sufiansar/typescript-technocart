function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(20, 32); //Normal function

const adding = (num1: number, num2: number) => num1 * num2;
adding(202, 232); //arrow function

const user = {
  name: "sufian",
  balance: 0,

  addBalance(balance: number) {
    return this.balance + balance;
  },
};
