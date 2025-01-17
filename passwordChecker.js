function isValidPassword(password) {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const digitalPattern = /[0-9]/;
    const iplPattern = /ipl/i;


    if (password.length < minLength) {
        return false;
    }
    if(!password.match(specialCharPattern)){
        return false;
    }
    if(!password.match(digitalPattern)){
        return false;
    }if(password.match(iplPattern)){
        return false;
    }
    
    return true;
};

module.exports = { isValidPassword };
 