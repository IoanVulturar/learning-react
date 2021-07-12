import axios from 'axios'

export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/login',
            { userName: username, password: password },
            { headers: { 'Content-Type': 'application/json' } }
        )
        return response.data.user
    } catch (err) {
        return Promise.reject('User Not Found -> ' + err)
    }
}