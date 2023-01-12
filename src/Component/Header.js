import React from 'react';
import { useState } from 'react';
import '../Style/Header.css'
import { Link } from 'react-scroll';

export default function Navbar(props) {
    const [isMobile, setIsMobile] = useState(false);

    const closeMenu = () => setIsMobile(false)
    return (
        <div className='header'>
            <nav className="nav">
                <Link to='/'>
                    <h2 className='logo'>P.</h2>
                </Link>

                <ul className={isMobile ? "nav-links-mobile" : "nav-links" }
                onClick={function() {
                    setIsMobile(false)
                }}>

                    <li className='home'>
                        <Link to='/'  spy={true} smooth={true} offset={0} duration={1000}onClick={closeMenu}>Home</Link>
                    </li>
                    
                    <li className='about'>
                        <Link to='about'  spy={true} smooth={true} offset={50} duration={1000}onClick={closeMenu}>About</Link>
                    </li>
                    
                    <li  className="portfolio">
                        <Link to="portfolio" spy={true} smooth={true} offset={-30} duration={1000} onClick={closeMenu}>Portfolio</Link>
                    </li>
                    
                    <li className="contact">
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={1000} onClick={closeMenu}>Contact</Link>
                    </li>
                   
                </ul>
                <button className='mobile-menu'
                onClick={function() {
                    setIsMobile(!isMobile)
                }}
                >
                    {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
                </button>
            </nav>
        </div>
    
    )
}