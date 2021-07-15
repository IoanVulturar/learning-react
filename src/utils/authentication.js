import { userLogin } from './requests'

export const isUserValid = async ({ username, password }) => {
	let adminUser = null

	try {
		adminUser = await userLogin(username, password)
	} catch (err) {
		console.log(err)
		return false
	}

	if (username === adminUser.userName || password === adminUser.password) {
		return true
	}
	return false
}
