import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import HomePage from "../Homepage/Homepage";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/home" exact component={HomePage} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;