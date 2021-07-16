import React from 'react'

const Welcome = ({ username }) => {
    return (

        <div className="container" >
            <div className="card mt-5" style={{ width: "500px", margin: "auto" }}>
                <div className="card-body text-center">
                    <h2>Welcome, <span>{username}!</span></h2>
                </div>
            </ div >
        </div>
    )
}
