import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component, ...rest }) => {
    const Component = component

    return (
        <Route {...rest} render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }} />
    )
}

export default ProtectedRoute