import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <section className='about'>
      
      {/* Left Side Image & Play Icon */}
      <div className='about-left'>
        <img src={about_img} alt="About Echomind" className='about-img' />
        <img src={play_icon} alt="Play Video" className='play-icon' />
      </div>

      {/* Right Side Content */}
      <div className='about-right'>
        <p>
          Echomind is a creative digital solutions company dedicated to transforming ideas into scalable, user-centric products.
          We specialize in UI/UX design, MVP development, web and mobile solutions, software design, and brand strategy.
          Our mission is to empower startups and businesses to grow with impactful design and technology.
        </p>
        <ul className="about-highlights">
          <li>UI/UX Design</li>
          <li>MVP Development</li>
          <li>Web & Mobile Solutions</li>
          <li>Software Design</li>
          <li>Brand Strategy</li>
        </ul>
        <p>Partner with Echomind to bring your vision to life with design and technology.</p>
      </div>

    </section>
  );
};

export default About;
