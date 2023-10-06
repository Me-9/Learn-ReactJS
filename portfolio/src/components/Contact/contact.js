import React, { useRef } from 'react';
import './contact.css';
// import Walmart from '../../assets/';
// import Walmart from '../../assets/';
// import Walmart from '../../assets/';
// import Walmart from '../../assets/';
// import FacebookIcon from '../../assets/';
// import TwitterIcon from '../../assets/';
// import YouTubeIcon from '../../assets/';
// import InstagramIcon from '../../assets/';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ky48hnl', 'template_2rwzudi', form.current, 'hkJhj1KwJxL0C-ITb')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contactPage">
        <div id="client">
          <h1 className="contactPageTitle">My Clients</h1>
          <p className="clientDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id augue augue. Duis eget volutpat diam. Phasellus mauris nisi, porttitor at purus id, condimentum vulputate diam. Fusce tincidunt bibendum eleifend. Nulla quis ipsum tincidunt, hendrerit orci convallis, dapibus lacus. Nam lobortis dolor arcu, et auctor mi rhoncus non. Curabitur varius condimentum maximus. Nulla nec tortor quam. Sed euismod placerat aliquam. Nam volutpat ultrices quam nec finibus. Nullam accumsan rutrum semper. Duis in mauris ante. Proin nec dui dignissim, dictum ipsum sed, tincidunt eros. Morbi varius hendrerit varius. Phasellus magna sapien, sagittis sit amet accumsan non, accumsan eu purus.        
          </p>
          <div className="clientImg">
            <img src="" alt="" className="clientImg" />
            <img src="" alt="" className="clientImg" />
            <img src="" alt="" className="clientImg" />
            <img src="" alt="" className="clientImg" />
          </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea rows="5" name='message' className="msg" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
              {/* <img src={facebookIcon} alt="Facebook" className="link" /> */}
              {/* <img src={TwitterIcon} alt="Twitter" className="link" /> */}
              {/* <img src={YouTubeIcon} alt="Youtube" className="link" /> */}
              {/* <img src={InstagramIcon} alt="Instagram" className="link" /> */}
            </div>
          </form>
        </div>
    </section>
  );
}

export default Contact
