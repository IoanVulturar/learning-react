import React from 'react'
import { useLocation, Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginForm from '../views/LoginForm'
import DashboardView from '../views/DashboardView'
import ProfileView from '../views/ProfileView'
import SearchView from '../views/SearchView'

const Dashboard = () => {
    const location = useLocation()
    const userDetails = location.state.loginDetails

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <DashboardView userDetails={userDetails} />
                </Route>

                <Route path="/profile">
                    <ProfileView userDetails={userDetails} />
                </Route>

                <Route path="/search">
                    <SearchView userDetails={userDetails} />
                </Route>

                <Route path="/logout">
                    <LoginForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Dashboard