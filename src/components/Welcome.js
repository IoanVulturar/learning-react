import React from 'react'
import { useLocation } from 'react-router-dom'

const Welcome = () => {
    const location = useLocation()
    const username = location.state.username

    return (
        <div >
            <div className="container"
                style={{
                    display: "flex", flexDirection: "column", height: "100vh",
                    justifyContent: "center", alignItems: "center"
                }}>
                <div className="card mt-5"
                    style={{ width: "500px", margin: "auto" }}>
                    <div className="card-body text-center">
                        <h2>Welcome, <span>{username}!</span></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome