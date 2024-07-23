import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar/Navbar'
import Stack from './components/stack/Stack'

function App() {
  return (
    <>
      <Navbar />
      <div className="myStack">
        <h1>My Stack</h1>
        <Stack />
        <Stack />
        <Stack />
      </div>
    </>
  )
}

export default App
