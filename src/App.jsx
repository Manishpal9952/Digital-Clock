import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let currentTime = new Date().toLocaleTimeString()

  const [time, setTime] = useState(currentTime)

  const timeHandler = () => {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime)
  }

  setInterval(timeHandler,1000)

  return (
    <>
     <h1>{time}</h1>
    </>
  )
}

export default App
