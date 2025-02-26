import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetails'
import Home from './pages/Home'
import Footer from './components/Footer'

export const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1448px'}}} m='auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}
