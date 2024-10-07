import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Bubble from './components/Bubble'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Bubble/>
    <Router>
      <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
      <Footer/>
      
    </Router>
    </div>
  
  )
}

export default App
