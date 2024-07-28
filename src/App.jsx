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
      {/* <div className="myStack">
        <h1>My Stack</h1>
        <Stack />
        <Stack />
        <Stack />
      </div> */}
      <div className="aboutMe">
        <div className="aboutMeText">
          <h1>Hello!</h1>
          <p>My name is <span className='underline'>Joshuel Ernest Simbulan.</span> I make apps.</p>
        </div>
        <div className="spotifyPlaylist">
          <iframe 
            src="https://open.spotify.com/embed/playlist/2IkrNzfNGZBRYP6WbVVRPz?utm_source=generator&theme=0" 
            width="100%" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </>
  )
}
export default App
