import React from 'react'
import {Switch,  withRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
export const Routes = withRouter(() => {
    return (
        <Switch>
                <Home />
        </Switch>
    )
})