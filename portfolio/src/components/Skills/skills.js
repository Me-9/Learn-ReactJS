import React from 'react';
import './skills.css';
// import UIDesign from '../../assets/';
// import WebDesign from '../../assets/';
// import AppDesign from '../../assets/';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span><br />
            <span className="skillDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="" alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;