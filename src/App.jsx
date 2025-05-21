
import React from 'react'
import Signup from './Components/Login/Signup'
import { Route, Routes } from 'react-router-dom'
// import Login from './Components/Login/login'
import LoginOne from './Components/Login/LoginOne'
import Home from './Components/Home.jsx/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import BuyerDashBoard from './Components/Dashboard/BuyerDashBoard'

export default function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<LoginOne/>}/>
         <Route path='/sellerdash' element={<Dashboard/>}/>
         <Route path='/buyerdash' element={<BuyerDashBoard/>}/>

       
      </Routes>
      
    </div>
  )
}
