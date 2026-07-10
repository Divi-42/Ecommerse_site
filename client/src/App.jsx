import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [theme , setTheme] = useState('light');

  return (
    <>
    <Home theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App
