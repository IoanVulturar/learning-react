import { userLogin } from './requests'

export const isUserValid = async ({ username, password }) => {
	try {
		const adminUser = await userLogin(username, password)
		if (username === adminUser.userName || password === adminUser.password) {
			return adminUser
		}
		return false
	} catch (err) {
		return false
	}
}
