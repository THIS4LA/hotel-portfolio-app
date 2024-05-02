import React from 'react'
import {BrowserRouter,Routes,Route, BrowserRouter} from 'react-router-dom'
import SignUp from '../pages/signup'
import SignIn from '../pages/signIn'
import App from '../App'


const routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default routers
