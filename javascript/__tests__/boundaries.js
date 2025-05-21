
function isValidPassword(password){
    const regex = password.length >= 8 && password.length <= 16 && /[a-zA-z]/.test(password) && /\d/.test(password) && /[a-zA-Z0-9]/.test(password)
    return regex

}

module.exports = {isValidPassword};
