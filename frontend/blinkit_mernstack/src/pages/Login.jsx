import React from 'react'
import { Outlet } from 'react-router-dom'

function Login() {
  return (
    <>
    <div>Login</div>
    <div>
     <Outlet/>
    </div>
    </>
    
  )
}

export default Login