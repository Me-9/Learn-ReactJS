import React from 'react'
import './works.css';
// import Portfolio1 from '../../assets/';
// import Portfolio2 from '../../assets/';
// import Portfolio3 from '../../assets/';
// import Portfolio4 from '../../assets/';
// import Portfolio5 from '../../assets/';
// import Portfolio6 from '../../assets/';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id augue augue. Duis eget volutpat diam. Phasellus mauris nisi, porttitor at purus id, condimentum vulputate diam. Fusce tincidunt bibendum eleifend. Nulla quis ipsum tincidunt, hendrerit orci convallis, dapibus lacus. Nam lobortis dolor arcu, et auctor mi rhoncus non. Curabitur varius condimentum maximus. Nulla nec tortor quam. Sed euismod placerat aliquam. Nam volutpat ultrices quam nec finibus. Nullam accumsan rutrum semper. Duis in mauris ante. Proin nec dui dignissim, dictum ipsum sed, tincidunt eros. Morbi varius hendrerit varius. Phasellus magna sapien, sagittis sit amet accumsan non, accumsan eu purus.</span>
        <div className="worksImgs">
            <img src="" alt="" className="worksImg" />
            <img src="" alt="" className="worksImg" />
            <img src="" alt="" className="worksImg" />
            <img src="" alt="" className="worksImg" />
            <img src="" alt="" className="worksImg" />
            <img src="" alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;