import React from 'react'
import '../Style/NotFound.css'
import ImgNotFound from '../assets/notfound.png'

export default function NotFound() {
  return (
    <div className="container-notfound">
        <img src={ImgNotFound} alt="notfound" />
    </div>
  )
}
