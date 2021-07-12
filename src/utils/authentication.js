import { userNameValidator, passwordValidator } from "./validator"

export const isUserValid = ({ username, password }) => {
    const adminUser = {
        username: "nelu",
        password: "aA1?"
    }

    if (!userNameValidator(username) || !passwordValidator(password)) {
        return false
    }

    if (username === adminUser.username && password === adminUser.password) {
        return true
    }
    return false
}

