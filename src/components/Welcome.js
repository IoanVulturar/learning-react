import React from 'react'

export default function Welcome({ username }) {
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
