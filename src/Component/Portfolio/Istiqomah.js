import React from 'react'
import '../../Style/Portfolio.css'
import ImgIstiqomah from '../../assets/istiqomah.png'

export default function Istiqomah() {
  return (
    <div className="background-istiqomah">
        <div className='container-projects'>
        <h2>Website Sekolah Al - Istiqomah</h2>
            <div className="text-projects">
                <div className="subtitle-text">
                    <p>Engga jauh beda dari web sekolah yang lain. Web ini dibuat sedikit ramai agar lebih menarik user untuk bergabung di sekolah tersebut. </p>
                    <a href="https://istiqomah.sch.id/" target="_blank" rel="noreferrer"><button>Lihat Web</button></a>
                    
                </div>
                <div className="properties-text">
                    <h4>Tool Design :</h4>
                    <p>Adobe Xd</p>
                    <h4 className='font-text'>Font :</h4>
                    <p>Montserrat</p>
                </div>
                
            </div>
            <p className='tech-stack'>Tech Stack: Vuejs, Css, Bootstrap.</p>
            <div className="img-portfolio">
                <img src={ImgIstiqomah} alt="istiqomah" />
            </div>
        </div>
    </div>
    
  )
}
