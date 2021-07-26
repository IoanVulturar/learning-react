import React from 'react'
import { useSelector } from 'react-redux'

export default function Welcome() {
    const username = useSelector(state => state.user.userName)

    return (

        <div className="container" >
            <div className="card mt-5 form-width">
                <div className="card-body text-center">
                    <h2>Welcome, <span>{username}!</span></h2>
                </div>
            </ div >
        </div>
    )
}
