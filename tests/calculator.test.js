const calculator = require("../functions/calculator");

test("Adds two numbers", () => {
    expect(calculator.add(2, 5)).toBe(7);
});

test("Subtracts two numbers", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test("Multiplies two numbers", () => {
    expect(calculator.multiply(13, 3)).toBe(39);
});

test("Divides two numbers", () => {
    expect(calculator.divide(20, 5)).toBe(4);
});
