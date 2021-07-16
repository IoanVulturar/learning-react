import React from 'react'
import { Switch, Route } from "react-router-dom";

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import Profile from './Profile'
import Search from './Search'

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/profile" component={Profile} />
                <Route path="/search" component={Search} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
