import React from 'react'
import '../../Style/Portfolio.css'
import ImgMi from '../../assets/mi.png'

export default function MI() {
  return (
    <div className="background-projects" >
        <div className='container-projects'>
        <h2>Website Sekolah MI</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>Website Sekolah Madrasah Ibtidaiyah. Konsep design sekolah ini dibuat rame tapi tetap terlihat simple. Perpaduan warna biru nya bikin adem dimata. </p>
                    <a href="/"><button>Lihat Web</button></a>
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Adobe Xd</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Dongle</p>
                </div>
            </div>
            <p className='tech-stack'>Tech Stack: Laravel, MySql, CSS, Bootstrap, Javascript.</p>
            <div className="img-portfolio">
                <img src={ImgMi} alt="mi" />
            </div>
        </div>
    </div>
    
  )
}
