const caesar = require("../functions/caesar");

test("works with a single word", () => {
    expect(caesar("cat", 1)).toBe("dbu");
});

test("works with sentences", () => {
    expect(caesar("i love cats", 5)).toBe("n qtaj hfyx");
});

test("preserves letter case", () => {
    expect(caesar("i LoVe cAtS", 3)).toBe("l OrYh fDwV");
});

test("works with negative shifts", () => {
    expect(caesar("i LoVe cAtS", -5)).toBe("d GjQz xVoN");
});

test("works with shifts greater than 25", () => {
    expect(caesar("i LoVe cAtS", 100)).toBe("e HkRa yWpO");
    expect(caesar("i LoVe cAtS", -100)).toBe("m PsZi gExW");
});

test("preserves numbers, punctuations and whitespaces", () => {
    expect(caesar("do I love Cats? I <3 cats! I have 6 cats", 5)).toBe(
        "it N qtaj Hfyx? N <3 hfyx! N mfaj 6 hfyx"
    );
});
