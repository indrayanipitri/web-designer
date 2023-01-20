import React from 'react'
import '../../Style/Portfolio.css'
import ImgMeppsimo from '../../assets/meppsimo.png'

export default function Meppsimo() {
  return (
    <div className="background-meppsimo">
        <div className='container-projects' id='portfolio'>
        <h2>Website Belanja Online - Meppsimo</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>Nyoba buat bikin website belanja online dengan design minimalis tapi tetap terlihat elegan!</p>
                    <a href="https://meppsimo.netlify.app/" target="_blank" rel="noreferrer"><button>Lihat Web</button></a>
                    
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Adobe Xd</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Montserrat</p>
                    <p>Noto Sans</p>
                    <p>Crete Round</p>
                </div>
            </div>
            <p className='tech-stack'>Tech Stack: HTML, CSS, Bootstrap.</p>
        <div className="img-portfolio">
            <img src={ImgMeppsimo} alt="meppsimo" />
        </div>
        </div>
    </div>
  )
}
