/*
# Take string and shift as input
# shift % 26 so that the value is always between 0 to 25
# Loop over every character in string
# If the character is a letter, then check if uppercase or lowercase
# Add the rounded shift value to the ascii code of that character
# Depending on the case, if the value is lower than 65 or 97 then add 26
# Depedning on the case, if the value is greater than 90 or 122 then subtract 26
*/

function caesar(string, shift) {
    let encryptedText = "";
    let roundedShift = shift % 26;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (isAlpha(char)) {
            let newCharCode = string.charCodeAt(i) + roundedShift;
            if (isUpperCase(char)) {
                if (newCharCode < 65) {
                    newCharCode += 26;
                } else if (newCharCode > 90) {
                    newCharCode -= 26;
                }
            } else {
                if (newCharCode < 97) {
                    newCharCode += 26;
                } else if (newCharCode > 122) {
                    newCharCode -= 26;
                }
            }
            encryptedText += String.fromCharCode(newCharCode);
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function isAlpha(char) {
    return /[A-Za-z]/.test(char);
}

function isUpperCase(char) {
    return /[A-Z]/.test(char);
}

module.exports = caesar;
