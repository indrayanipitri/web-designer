import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Style/Header.css'

export default function Navbar(props) {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
        <nav className="nav">
            <Link to='/'>
            <h2 className='logo'>P.</h2>
            </Link>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links" }
            onClick={function() {
                setIsMobile(false)
            }}>
                <NavLink to='/' className="about"   >
                    <li> About </li>
                </NavLink>
                <NavLink to='/portfolio' className="portfolio">
                    <li> Portfolio </li>
                </NavLink>
                <NavLink to='/skills' className="skills">
                    <li > Skills </li>
                </NavLink>
                <NavLink to='/contact' className="contact">
                    <li > Contact </li>
                </NavLink>
            </ul>
            <button className='mobile-menu'
            onClick={function() {
                setIsMobile(!isMobile)
            }}
            >
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
        </>
    )
}