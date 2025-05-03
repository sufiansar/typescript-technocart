"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(20, 32); //Normal function
const adding = (num1, num2) => num1 * num2;
adding(202, 232); //arrow function
const user = {
    name: "sufian",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
