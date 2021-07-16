import axios from 'axios'

export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/login',
            { userName: username, password: password },
            { withCredentials: true }
        )

        return response.data.user
    } catch (err) {
        return Promise.reject('User Not Found -> ' + err)
    }
}

export const updateUser = async ({id, username, email, password, phoneNumber, role}) => {
    try {
        axios.defaults.withCredentials = true
        const response = await axios.patch(
            `http://localhost:5000/users/${id}`,
            { 
                userName: username,
                password: password,
                email: email,
                phoneNumber: phoneNumber,
                role: role
             }
        )
        return response.data
    } catch (err) {
        return Promise.reject('PATCH request error')
    }
}