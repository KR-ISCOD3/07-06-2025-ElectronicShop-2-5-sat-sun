import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
