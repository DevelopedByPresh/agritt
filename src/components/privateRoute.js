
import React from "react"

import { Outlet, Navigate } from 'react-router-dom'



import {useSelector} from "react-redux"

const PrivateRoutes = () => {

    // let auth = useSelector((state)=>state.user.Authenticated)
    // let auth = localStorage.getItem('authenticated')
    let auth = sessionStorage.getItem('userToken')

   // let auth = true
    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes