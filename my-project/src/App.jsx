//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'


function App  ()  {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>

    <Route path="" element={<Dashboard />} />

    </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App