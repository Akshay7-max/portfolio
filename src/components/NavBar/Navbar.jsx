import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';  //npm i react-scroll
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import mobMenu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="desktopMenu">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">About</Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">Portfolio</Link>
                    <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Clients</Link>
                </div>

                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <img src={contact} alt="" className="desktopMenuImg" />&nbsp;&nbsp;Contact Me
                </button>

                <img src={mobMenu} alt="mobMenu" className="mobileMenuImg" onClick={() => { setShowMenu(!showMenu) }} />
                <div className="mobileMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuListItem" onClick={() => { setShowMenu(false) }}>Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-30} duration={500} className="mobileMenuListItem" onClick={() => { setShowMenu(false) }}>About</Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-30} duration={500} className="mobileMenuListItem" onClick={() => { setShowMenu(false) }}>Portfolio</Link>
                    <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={500} className="mobileMenuListItem" onClick={() => { setShowMenu(false) }}>Clients</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-40} duration={500} className="mobileMenuListItem" onClick={() => { setShowMenu(false) }}>Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
