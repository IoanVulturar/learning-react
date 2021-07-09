import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginAuth from '../utils/loginAuth'

const LoginForm = ({ login, error }) => {
    const [details, setDetails] = useState({
        username: '', password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()

        login(details)
    }

    return (
        <div className="container"
            style={{
                display: "flex", flexDirection: "column", height: "100vh",
                justifyContent: "center", alignItems: "center"
            }}>
            <div className="card mt-5"
                style={{ width: "500px", margin: "auto" }}>
                <div className="card-body text-center">
                    <form onSubmit={submitHandler} >

                        <div className="mt-1">
                            <h2 className="h3 font-weight-light">Sign into your account</h2>
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
                            <label htmlFor="password" className="sr-only">Password: </label><br />
                            <input type="password" className="form-control" name="password" id="password"
                                placeholder="password" required
                                onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                value={details.password} />
                        </div>

                        <div className="checkbox mt-3">
                            <label>
                                <input type="checkbox" value="remember-me" />
                                <span className="ml-1 h6 font-weight-normal">Remember Me?</span>
                            </label>
                        </div>

                        <div className="mt-2">
                            <input type="submit" value="Sign In" className="btn btn-lg btn-primary btn-block" />
                        </div>

                        <div className="mt-3">
                            Don't have an account?
                            <Link to="/register" className="ml-2">Register here</Link>
                        </div>

                    </form >
                </div>
            </div >
        </div >
    )
}

export default LoginForm