import React, { Component } from "react";
import { useNavigate, Route, Navigate, Outlet } from "react-router-dom";

const isAuth = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const tokenOnly = token.token
    if(tokenOnly === null){
        return false
    }
    return tokenOnly
}

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         isAuth() ? (
//             <Component {...props} />
//         ) : (
//             <Navigate to='/' />
//         )
//     )} />
// )

const ProtectedRoute = () =>{
    const auth = isAuth()

    return auth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute;