import React from 'react'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import Outfit from './components/Outfit'
import "./App.css" 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
require ('bootstrap')

function App() {
  return (
    <div>
      <BrowserRouter style={{}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Tabs />} />
          <Route exact path="/outfit" element={<Outfit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App