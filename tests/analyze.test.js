const analyze = require("../functions/analyze");

const object = analyze([1, 8, 3, 4, 2, 6]);

test("determines the values correctly", () => {
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
});
