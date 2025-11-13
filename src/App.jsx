import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
        <Header/>
        <Sidenav/>
        <main className="main">
            <Home />
        </main>
        <Footer/>
    </div>
  )
}

export default App



