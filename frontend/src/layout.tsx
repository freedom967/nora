import { HashRouter as Router, Link, Switch, Route } from "react-router-dom"
import React from "react"
import { AddNote } from "./pages/addnote"
import { Home } from "./pages/home"

export const Layout = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/addnote' component={AddNote} />
            </Switch>
        </Router>
    )
}
