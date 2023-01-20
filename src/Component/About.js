import React from 'react'
import '../Style/About.css'
import ImgMe from '../assets/me.png'


export default function About() {
  return (
    <div className='container' id='about'>
        <div className="about-me">
            <div className="img-me">
                <img src={ImgMe} alt="me" />
            </div>
            <div className="text-me">
               <p>Senang menghabiskan waktu di depan laptop sambil mendengarkan lagu-lagu favorite bersama es kopi. Melakukan eksplorasi design dan suka membuat design web yang simple juga user friendly. Suka melakukan slicing design dengan skills tech stack yang dimiliki. Saat ini bertempat tinggal di Tangerang.</p>
               <p>Skills frontend dan design tools:</p>
               <div className="list-skills">
                <ul className='list-1'>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Bootstrap</li>
                  <li>Javascript</li>
                </ul>
                <ul className='list-1'>
                  <li>Reactjs</li>
                  <li>Figma</li>
                  <li>Adobe Xd</li>
                  <li>Photoshop</li>
                </ul>
                </div>
               
            </div>
        </div>
    </div>
  )
}
