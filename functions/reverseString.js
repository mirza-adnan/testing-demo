function reverseString(text) {
    if (typeof text !== "string") return "";
    let output = "";
    const n = text.length;
    for (let i = n - 1; i >= 0; i--) {
        output += text[i];
    }
    return output;
}

module.exports = reverseString;
