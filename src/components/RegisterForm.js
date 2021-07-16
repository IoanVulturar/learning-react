import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = ({ login, error }) => {
    const [details, setDetails] = useState({
        username: '', email: '', password: '', phoneNumber: '', role: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()

        login(details)
    }

    return (
        <div className="container">
            <div className="card mt-5"
                style={{ width: "500px", margin: "auto" }}>
                <div className="card-body text-center">
                    <form onSubmit={submitHandler} >
                        <div className="mt-1">
                            <h2 className="h3 font-weight-light">Create account</h2>
                        </div>

                        {(error !== '') ? (<div className="error">{error}</div>) : ''}

                        <div className="">
                            <label htmlFor="username" className="sr-only">Username: </label><br />
                            <input type="text" className="form-control" name="username" id="username"
                                placeholder="username" required autoFocus
                                onChange={(e) => setDetails({ ...details, username: e.target.value })}
                                value={details.username} />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="sr-only">Email: </label><br />
                            <input type="email" className="form-control" name="email" id="email"
                                placeholder="email" required
                                onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                value={details.email} />
                        </div>
                        <div className="">
                            <label htmlFor="phoneNumber" className="sr-only">Email: </label><br />
                            <input type="text" className="form-control" name="phoneNumber" id="phoneNumber"
                                placeholder="phone number" required
                                onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
                                value={details.phoneNumber} />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="sr-only">Password: </label><br />
                            <input type="password" className="form-control" name="password" id="password"
                                placeholder="password" required
                                onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                value={details.password} />
                        </div>

                        <div className="">
                            <label htmlFor="role" className="sr-only">Role: </label><br />
                            <input type="text" className="form-control" name="role" id="role"
                                placeholder="role" required
                                onChange={(e) => setDetails({ ...details, role: e.target.value })}
                                value={details.role} />
                        </div>

                        <div className="mt-3">
                            <input type="submit" value="Register" className="btn btn-lg btn-primary btn-block" />
                        </div>
                        <div className="mt-3">
                            Already have an account?
                            <Link to="/" className="ml-2">Login here</Link>
                        </div>
                    </form >
                </div>
            </div >
        </div >
    )
}

export default RegisterForm