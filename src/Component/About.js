import React from 'react'
import '../Style/About.css'
import ImgMe from '../assets/me.png'

export default function About() {
  return (
    <div className='container'>
        <div className="about-me">
            <div className="img-me">
                <img src={ImgMe} alt="me" />
            </div>
            <div className="text-me">
               <p>Seorang Fullstack Designer. Suka menghabiskan waktu berjam-jam di depan laptop bersama es kopi dan lagu-lagu favorite. Melakukan eksplorasi design dan suka membuat design yang simple dan modern yang memiliki fungsionalitas yang baik dan juga user friendly. Suka melakukan slicing design dengan skills tech stack yang dimiliki. Saat ini bertempat tinggal di Tangerang.</p>
            </div>
        </div>
    </div>
  )
}
