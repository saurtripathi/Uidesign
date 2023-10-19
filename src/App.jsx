import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header'

function App() {
  const [on, setOn] = useState(false)
  const getIsMobile = () => window.innerWidth <= 500;
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  function toggle() {
    console.log('clicked')
    setOn(prevOn => prevOn = !prevOn)
  }

  return (
    <>
      <Header toggle={toggle} on={on} isMobile={isMobile} />
    </>
  )
}

export default App
