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

export const updateUser = async ({ id, username, email, password, phoneNumber, role }) => {
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

export const registerUser = async ({ userName, email, password, phoneNumber, role }) => {
    try {
        axios.defaults.withCredentials = true
        const response = await axios.post(
            'http://localhost:5000/users',
            {
                userName,
                password,
                email,
                phoneNumber,
                role
            }
        )
        return response.data
    } catch (err) {
        return Promise.reject('Register user error -> ' + err)
    }
}

export const getUsers = async () => {
    try {
        axios.defaults.withCredentials = true
        const response = await axios.get(
            'http://localhost:5000/users'
        )
        return response.data.users
    } catch (err) {
        return Promise.reject('GET users error -> ' + err)
    }
}

export const getUser = async (searchTerm) => {
    try {
        axios.defaults.withCredentials = true
        const response = await axios.get(
            `http://localhost:5000/users/${searchTerm}`
        )
        return response.data.user
    } catch (err) {
        return Promise.reject('GET user error -> ' + err)
    }
}

export const deleteUser = async (id) => {
    try {
        axios.defaults.withCredentials = true
        const response = await axios.delete(
            `http://localhost:5000/users/${id}`
        )
        return response
    } catch (err) {
        return Promise.reject('Remove user error -> ' + err)
    }
}