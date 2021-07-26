import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginForm from '../views/LoginForm'
import DashboardView from '../views/DashboardView'
import ProfileView from '../views/ProfileView'
import SearchView from '../views/SearchView'

const Dashboard = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <DashboardView />
                </Route>

                <Route path="/profile">
                    <ProfileView />
                </Route>

                <Route path="/search">
                    <SearchView />
                </Route>

                <Route path="/logout">
                    <LoginForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Dashboard