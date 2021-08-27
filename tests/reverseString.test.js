const reverseString = require("../functions/reverseString");

test("reverses a string", () => {
    expect(reverseString("cat")).toBe("tac");
});

test("reverses a sentence", () => {
    expect(reverseString("i want a cat")).toBe("tac a tnaw i");
});

test("does nothing when input is not a string", () => {
    expect(reverseString(12345)).toBe("");
});
