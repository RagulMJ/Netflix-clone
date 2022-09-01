import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import MoviePage from './pages/Movies'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'
import TVShows from './pages/TVShows'

export default function App() {
  return (
    
      <Routes>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/signup' element={<Signup />}/>
        <Route exact path='/player' element={<Player />}/>
        <Route exact path='/movies' element={<MoviePage />}/>
        <Route exact path='/' element={<Netflix />}/>
        <Route exact path='/tv' element={<TVShows />}/>
      </Routes>
    
  )
}
