// import { userNameValidator, passwordValidator } from "./validator"
import { userLogin } from './requests'

export const isUserValid = async ({ username, password }) => {
    // if (!userNameValidator(username) || !passwordValidator(password)) {
    //     return false
    // }
    let adminUser = null

    try {
        adminUser = await userLogin(username, password)
    } catch (err) {
        console.log(err)
        return false
    }

    if (username === adminUser.userName || password === adminUser.password) {
        return adminUser
    }
    return false
}