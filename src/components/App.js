import React, { useState } from 'react'
import LoginForm from './LoginForm'
import Welcome from './Welcome'
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import RegisterForm from './RegisterForm';
import NotFound from './NotFound';

export default function App() {
    const [user, setUser] = useState({ username: '', password: '' })
    const [error, setError] = useState('')
    const history = useHistory()

    const adminUser = {
        username: "nelu",
        password: "123"
    }

    const login = user => {
        if (user.username === adminUser.username && user.password === adminUser.password) {
            setUser({
                username: user.username,
                password: user.password
            })
            console.log(user.username, user.password);
            history.push("/welcome")
        } else {
            setError('credentials do not match')
        }
    }

    const logout = () => {
        console.log('Logout');
        setUser({ username: '', password: '' })
    }


    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <LoginForm login={login} error={error} />
                </Route>
                <Route path="/register" component={RegisterForm} />
                <Route path="/welcome">
                    <Welcome username={user.username} />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
