const capitalize = require("../functions/capitalize");

test("capitalizes first letter of string", () => {
    expect(capitalize("time to buy socks")).toBe("Time to buy socks");
});

test("does nothing when first char is a digit", () => {
    expect(capitalize("1234 fuck you asshole")).toBe("1234 fuck you asshole");
});

test("does nothing when first char is punctuation", () => {
    expect(capitalize("!cat cat cat")).toBe("!cat cat cat");
});

test("does nothing when input is not a string", () => {
    expect(capitalize(123123)).toBe("");
});
