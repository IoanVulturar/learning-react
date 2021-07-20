import React from 'react'
import { useLocation, Route, Switch, BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Profile from './Profile'
import Search from './Search'
import LoginForm from './LoginForm'

const Dashboard = () => {
    const location = useLocation()
    const userDetails = location.state.loginDetails

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Navbar username={userDetails.userName} />
                    <Welcome username={userDetails.userName} />
                </Route>

                <Route path="/profile">
                    <Navbar username={userDetails.userName} />
                    <Profile userDetails={userDetails} />
                </Route>

                <Route path="/search">
                    <Navbar username={userDetails.userName} />
                    <Search />
                </Route>

                <Route path="/logout" component={LoginForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Dashboard