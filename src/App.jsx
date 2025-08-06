import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MoviesCarrousel from './components/MoviesCarrousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />
        <MoviesCarrousel />
      </div>
    </>
  )
}

export default App
