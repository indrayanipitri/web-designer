import React from 'react'
import '../Style/Hero.css'

export default function Hero() {
  return (
    <div className='hero-' id='/'>
    <div className='container'>
      <div className="icon-medsos">
        {/* <a href="/"><i className="fab fa-linkedin"></i></a> */}
        <a href="https://github.com/indrayanipitri" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      </div>
      <div className="hero">
        <h1 className='hero-name'>Pitri Indrayani,</h1>
          {/* <h1>UI/UX</h1> */}
          <h1>Web Designer.</h1>
          {/* <h1>Frontend Developer</h1> */}
        </div>
    </div>
    </div>
    
  )
}
