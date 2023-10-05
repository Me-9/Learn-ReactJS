import React from 'react'
import './navbar.css';
import MessageIcon from '../../assets/MessageIcon.png' ;
import { Link } from "react-scroll";
import MessageIcon2 from '../../assets/MessageIcon2.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={MessageIcon} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={MessageIcon2} alt="" className="desktopMenuImg" />Contact Me
      </button>
    </nav>
  )
}

export default Navbar