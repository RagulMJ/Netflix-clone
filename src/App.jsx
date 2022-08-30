import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'

export default function App() {
  return (
    
      <Routes>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/signup' element={<Signup />}/>
        <Route exact path='/player' element={<Player />}/>
        <Route exact path='/' element={<Netflix />}/>
      </Routes>
    
  )
}
