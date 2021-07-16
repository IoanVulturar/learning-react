import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { updateUser } from '../utils/requests'

export default function Profile({ userDetails }) {
    const history = useHistory()
    const [error, setError] = useState('')
    const { _id, userName, password, email, phoneNumber, role } = userDetails
    const [updateDetails, setUpdateDetails] = useState({
        id: _id,
        userName: userName,
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        role: role
    })

    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            const message = await updateUser(updateDetails)
            if (message) {
                setError('User profile has been updated!')
            } else {
                setError('Update details are not valid')
            }
        } catch (err) {
            setError(err)
        }
    }

    return (
        <div className="container">
            <div className="card mt-5"
                style={{ width: "500px", margin: "auto" }}>
                <div className="card-body">

                    <div className="mt-1">
                        <h2>Profile</h2>
                    </div>

                    {(error !== '') ? (<div className="alert-warning p-2 mt-3">{error}</div>) : ''}

                    <form onSubmit={onSubmit}>

                        <div className="mt-3">
                            <label htmlFor="username" >Username: </label>
                            <input type="text" className="form-control" name="username" id="username" value={updateDetails.userName}
                                onChange={(e) => setUpdateDetails({ ...updateDetails, userName: e.target.value })} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="email">Email: </label>
                            <input type="email" className="form-control" name="email" id="email" value={updateDetails.email}
                                onChange={(e) => setUpdateDetails({ ...updateDetails, email: e.target.value })} />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="phoneNumber">Phone Number: </label>
                            <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" value={updateDetails.phoneNumber}
                                onChange={(e) => setUpdateDetails({ ...updateDetails, phoneNumber: e.target.value })} />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password">Password: </label>
                            <input type="text" className="form-control" name="password" id="password" value={updateDetails.password}
                                onChange={(e) => setUpdateDetails({ ...updateDetails, password: e.target.value })} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="role">Role: </label>
                            <input type="text" className="form-control" name="role" id="role" value={updateDetails.role}
                                onChange={(e) => setUpdateDetails({ ...updateDetails, role: e.target.value })} />
                        </div>

                        <div className="mt-4">
                            <input type="submit" value="Update Profile" className="btn btn-lg btn-primary btn-block" />
                        </div>

                    </form>

                </div>
            </div >
        </div >
    )
}
