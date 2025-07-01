import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/down-arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Turning Ideas Into Digital Reality</h1>
        <p>We help startups & businesses build stunning websites, apps & digital products.</p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="Arrow Down" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
