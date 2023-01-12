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
               <p>Seorang Web Designer. Suka menghabiskan waktu berjam-jam di depan laptop bersama es kopi dan lagu-lagu favorite. Melakukan eksplorasi design dan suka membuat design yang simple dan modern yang memiliki fungsionalitas yang baik dan juga user friendly. Suka melakukan slicing design dengan skills tech stack yang dimiliki. Saat ini bertempat tinggal di Tangerang.</p>
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
