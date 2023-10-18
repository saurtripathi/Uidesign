import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header'

function App() {
  const [on, setOn] = useState(false)

  function toggle() {
    console.log('clicked')
    setOn(prevOn => prevOn = !prevOn)
  }

  return (
    <>
      <Header toggle={toggle} on={on} />
    </>
  )
}

export default App
