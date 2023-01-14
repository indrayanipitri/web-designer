import React from 'react'
import '../../Style/Portfolio.css'
import ImgCariMotor from '../../assets/carimotor.png'

export default function Tkit() {
  return (
        <div className='container-projects'>
        <h2>User Interface App Cari Motor</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>Cari motor bekas atau baru tapi engga bikin mata pusing dengan banyak nya component yang berdekatan. Dibuat minimalis dan sesimple mungkin yang membuat user jd betah buat cari-cari motor yang diimpikan!</p>                    
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Figma</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Dongle</p>
                </div>
                
            </div>
        <div className="img-portfolio">
            <img src={ImgCariMotor} alt="carimotor" />
        </div>
        </div>
    
  )
}
