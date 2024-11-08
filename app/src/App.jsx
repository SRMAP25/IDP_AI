import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import Input from './Components/Input'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </Router>
  )
}

export default App

