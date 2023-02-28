import React from 'react'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Sidenav from '../pages/sidenav/SideNav'
export const Routes = withRouter(() => {
    return (
        <Switch>
            <Home />
        </Switch>
    )
})