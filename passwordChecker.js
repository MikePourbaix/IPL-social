function isValidPassword(password) {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const digitalPattern = /[0-9]/;


    if (password.length < minLength) {
        return false;
    }
    if(!password.match(specialCharPattern)){
        return false;
    }
    if(!password.match(digitalPattern)){
        return false;
    }
    
    return true;
};

module.exports = { isValidPassword };
 