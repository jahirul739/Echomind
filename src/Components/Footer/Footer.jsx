import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // Echomind logo path

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-about'>
          <img src={logo} alt='Echomind Logo' className='footer-logo' />
          <p>Building scalable, user-focused digital products for startups and businesses worldwide.</p>
          <button className='footer-btn'>Contact us now</button>
        </div>

        <div className='footer-links'>
          <div>
            <h4>Services</h4>
            <ul>
              <li>UI/UX Design</li>
              <li>MVP Development</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Brand Strategy</li>
              <li>Software Design</li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Work</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Behance</li>
              <li>Dribbble</li>
              <li>X (Twitter)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2025 Echomind. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
