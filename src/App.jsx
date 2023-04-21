import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import PostDetails from './routes/PostDetails'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/dashboard/post/:id' Component={PostDetails}/>
        </Routes>
    </div>
  )
}

export default App
