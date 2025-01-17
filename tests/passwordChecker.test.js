const { isValidPassword } = require('../passwordChecker');

describe("Password Checker, check if the password pass several restrictions", () => {

    it("should return false if the password is shorter than 8 characters", () => {
        expect(isValidPassword('short?')).toBe(false);
        expect(isValidPassword('shortButNotTooShort!')).toBe(true);
    });

    it("should return false if the password does not contain a special character", () => {
        expect(isValidPassword('noSpecialCharacter')).toBe(false);
        expect(isValidPassword('Spec!')).toBe(false);
        expect(isValidPassword('SpecialCharacter!')).toBe(true);
    });
});