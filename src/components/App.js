import React from 'react'
import { Switch, Route } from "react-router-dom";

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm';
import Welcome from './Welcome'
import NotFound from './NotFound';

export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
