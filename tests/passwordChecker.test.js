const { isValidPassword } = require('../passwordChecker');

describe("Password Checker, check if the password pass several restrictions", () => {

    it("should return false if the password is shorter than 8 characters", () => {
        expect(isValidPassword('0short?')).toBe(false);
        expect(isValidPassword('0shortButNotTooShort!')).toBe(true);
    });

    it("should return false if the password does not contain a special character", () => {
        expect(isValidPassword('1noSpecialCharacter')).toBe(false);
        expect(isValidPassword('1Spec!')).toBe(false);
        expect(isValidPassword('1SpecialCharacter!')).toBe(true);
    });

    it("should return false if the password does not contain a digit", () => {
        expect(isValidPassword('noDigit?')).toBe(false);
        expect(isValidPassword('Digit1!!')).toBe(true);
    });
});