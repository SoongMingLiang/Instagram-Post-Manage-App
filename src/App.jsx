import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
    </div>
  )
}

export default App
