import React from 'react'
import '../../Style/Portfolio.css'
import ImgTkit from '../../assets/tkit.png'

export default function Tkit() {
  return (
        <div className='container-projects'>
        <h2>Website Sekolah TKIT</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>Website Sekolah TKIT Al - Istiqomah. Design nya aku buat minimalis, simple, tapi lucu. Warna hijau nya bikin web terlihat segar.</p>
                    <a href="https://tkit.istiqomah.sch.id/" target="_blank" rel="noreferrer"><button>Lihat Web</button></a>
                    
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Adobe Xd</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Poppins</p>
                </div>
                
            </div>
            <p className='tech-stack'>Tech Stack: ReactJs, CSS, Bootstrap.</p>
            
            <div className="img-portfolio">
            <img src={ImgTkit} alt="tkit" />
            </div>
        </div>
    
  )
}
