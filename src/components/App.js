import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../css/style.css'

import LoginForm from '../views/LoginForm'
import RegisterForm from '../views/RegisterForm';
import Dashboard from './Dashboard'
import NotFound from '../views/NotFound'
import Profile from './Profile'
import Search from './Search'

export default function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <LoginForm />
            </Route>
            <Route path="/register">
                <RegisterForm />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/profile" >
                <Profile />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch >
    )
}
