const { isValidPassword } = require('../passwordChecker');

describe("Password Checker check if the password is good", () => {

    it("should return false if the password is shorter than 8 characters", () => {
        expect(isValidPassword('short')).toBe(false);
        expect(isValidPassword('shortButNotTooShort')).toBe(true);
    });
});