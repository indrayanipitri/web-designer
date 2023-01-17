import React from 'react'
import '../../Style/Portfolio.css'
import ImgBurgerEnak from '../../assets/burgerenak.png'

export default function Meppsimo() {
  return (
    <div className="background-burgerenak">
        <div className='container-projects' id='portfolio'>
        <h2>Website Belanja Online - Meppsimo</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>Karena suka baget sama burger, muncul lah ide bikin web landing page ini. Dengan menerapkan prinsip swiss style, jelas design ui nya terlihat simple dan objektif tentunya.</p>
                    <a href="/" target="_blank" rel="noreferrer"><button>Lihat Web</button></a>
                    
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Figma</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Poppins</p>
                    <p>Rowdies</p>
                </div>
            </div>
            <p className='tech-stack'>Tech Stack: Reactjs, CSS.</p>
        <div className="img-portfolio">
            <img src={ImgBurgerEnak} alt="burgerenak" />
        </div>
        </div>
    </div>
  )
}
