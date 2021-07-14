import React from 'react'
import { useLocation, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Profile from './Profile'
import Search from './Search'

const Dashboard = () => {
    const location = useLocation()
    const userDetails = location.state.loginDetails
    console.log(userDetails)
    return (
        <Router >
            <Navbar username={userDetails.userName} />

            <Switch>
                <Route path="/dashboard">
                    <Welcome username={userDetails.userName} />
                </Route>

                <Route path="/profile">
                    <Profile userDetails={userDetails} />
                </Route>

                <Route path="/search">
                    <Search />
                </Route>
            </Switch>

        </Router >


    )
}

export default Dashboard