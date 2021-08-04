import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Navbar = ({ user, setUserDetails }) => {
    const history = useHistory()

    const onLogout = ()=>{
        localStorage.removeItem('jwt')
        setUserDetails({})
        history.push('/')
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link to="/dashboard" className="text-white">Dashboard</Link>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown mr-3">
                        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">
                            <i className="fas fa-user-circle"></i> {user.userName}
                        </a>
                        <div className="dropdown-menu">
                            <Link to="/profile" className="dropdown-item"><i className="far fa-id-card"></i> Profile</Link>
                            <Link to="/search" className="dropdown-item"><i className="fas fa-search"></i> Search</Link>
                            <Link to="/logout" className="dropdown-item" onClick={onLogout}><i className="fas fa-sign-out-alt"></i> Logout</Link>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar