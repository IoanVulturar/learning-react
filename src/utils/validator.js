const regExPassword = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!?_])[0-9a-zA-Z!?_]{4,}/g
const regExUsername = /^[a-zA-Z]/g
const NAME_LENGTH = 2

const userNameValidator = (userName) => {
    if (userName.length > NAME_LENGTH && userName.match(regExUsername)) {
        return true
    }
    return false
}

const passwordValidator = (password) => {
    return password.match(regExPassword)
}

module.exports = {
    userNameValidator,
    passwordValidator
}
