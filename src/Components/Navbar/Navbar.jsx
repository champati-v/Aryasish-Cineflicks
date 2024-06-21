import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {

// const [menu, setMenu] = useState("home");
const menuRef = useRef();

const openMenu = () => {
  menuRef.current.style.right="0";
}

const closeMenu = () => {
  menuRef.current.style.right="-350px";
}
  return (
    <div className='navbar'>
      <img src={logo} width="150px" alt="" className='logo' />
      <img src={menu} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul  ref={menuRef} className="nav-menu">
      <img src={close} onClick={closeMenu} alt="" className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' offset={50} href='#home' ><p onClick = {()=> CSSLayerStatementRule("home")}> Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick = {()=> CSSLayerStatementRule("services")}> Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick = {()=> CSSLayerStatementRule("about")}> About Us</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick = {()=> CSSLayerStatementRule("contact")}> Contact Us</p></AnchorLink></li>
        
      </ul>
      <div className="nav-connect">
        <a href="https://wa.me/+916370604291?text=I'm%20interested%20in%20your%20wedding%20video%20shoot%20service" target='_blank'>Book Now</a>
      </div>
    </div>
  )
}

export default Navbar