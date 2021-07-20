import React, { useState } from 'react'
import { updateUser } from '../utils/requests'

export default function Profile({ userDetails }) {
    const [error, setError] = useState('')
    const { _id, userName, password, email, phoneNumber, role } = userDetails
    const [updateDetails, setUpdateDetails] = useState({
        id: _id,
        userName,
        password,
        email,
        phoneNumber,
        role
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

    const onChangeHandler = (e) => {
        const { id, value } = e.target
        setUpdateDetails({ ...updateDetails, [id]: value })
    }

    return (
        <div className="container">
            <div className="card mt-5 form-width">
                <div className="card-body">

                    <div className="mt-1">
                        <h2>Profile</h2>
                    </div>

                    {(error !== '') ? (<div className="alert-warning p-2 mt-3">{error}</div>) : ''}

                    <form onSubmit={onSubmit}>

                        <div className="mt-3">
                            <label htmlFor="userName" >Username: </label>
                            <input type="text" className="form-control" name="userName" id="userName" value={updateDetails.userName}
                                onChange={onChangeHandler} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="email">Email: </label>
                            <input type="email" className="form-control" name="email" id="email" value={updateDetails.email}
                                onChange={onChangeHandler} />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="phoneNumber">Phone Number: </label>
                            <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" value={updateDetails.phoneNumber}
                                onChange={onChangeHandler} />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password">Password: </label>
                            <input type="text" className="form-control" name="password" id="password" value={updateDetails.password}
                                onChange={onChangeHandler} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="role">Role: </label>
                            <input type="text" className="form-control" name="role" id="role" value={updateDetails.role}
                                onChange={onChangeHandler} />
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
