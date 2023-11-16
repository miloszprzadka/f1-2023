import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Teams from './pages/Teams'
import Home  from './pages/Home' 
import Drivers from './pages/Drivers'
import Circuits from './pages/Circuits'
import Standings from './pages/Standings'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/circuits" element={<Circuits />} />
          <Route path="/standings" element={<Standings />} />
       </Routes>

    </div>   
  )
}

export default App
