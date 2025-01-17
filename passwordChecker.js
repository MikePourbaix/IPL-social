function isValidPassword(password) {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;


    if (password.length < minLength) {
        return false;
    }
    if(!password.match(specialCharPattern)){
        return false;
    }
    
    return true;
};

module.exports = { isValidPassword };
