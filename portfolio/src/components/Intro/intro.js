import React from 'react';
import './intro.css';
import bg from '../../assets/IMG_1040 no bg.png';
import btnImg from '../../assets/MessageIcon.png';
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro"> 
          <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Man</span> <br />Website Programmer</span>
            <p className="introPara">I'm a skilled website programmer with experience using ReactJS.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>  
          </div>
          <img src={bg} alt="Profile" className="bg" />
    </section>
  )
};


export default Intro;
