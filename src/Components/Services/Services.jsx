import React from 'react';
import './Services.css';
import Services_1 from '../../assets/Services_1.png';
import Services_3 from '../../assets/Services_3.png';
import Services_4 from '../../assets/Services_4.png';
import Services_icon_1 from '../../assets/Services_icon_1.png';
import Services_icon_2 from '../../assets/Services_icon_2.png';
import Services_icon_3 from '../../assets/Services_icon_3.png';

const Services = () => {
  return (
    <section className='services-section' id='services'>
      <div className="service-box">
        <img src={Services_1} alt="UI/UX Design" />
        <div className="caption">
          <img src={Services_icon_1} alt="Icon 1" />
          <p>UI/UX Design</p>
          <h6>Intuitive, Research-Driven Experiences</h6>
          <ul>
            <li>UX/UI Consulting</li>
            <li>UX Audits</li>
            <li>User Research</li>
            <li>Usability Testing</li>
            <li>Wireframing & Prototyping</li>
            <li>Design Systems</li>
          </ul>
        </div>
      </div>

      <div className="service-box">
        <img src={Services_3} alt="Brand Design" />
        <div className="caption">
          <img src={Services_icon_2} alt="Icon 2" />
          <p>Brand Design</p>
          <h6>Timeless, Impactful Visuals</h6>
          <ul>
            <li>Brand Identity</li>
            <li>Corporate Identity</li>
            <li>Brand Strategy</li>
            <li>Motion Graphics</li>
            <li>Graphic Design</li>
            <li>Startup Branding</li>
          </ul>
        </div>
      </div>

      <div className="service-box">
        <img src={Services_4} alt="Web Development" />
        <div className="caption">
          <img src={Services_icon_3} alt="Icon 3" />
          <p>Web Development</p>
          <h6>Fast, Scalable, User-Centric</h6>
          <ul>
            <li>Startup MVPs</li>
            <li>Mobile MVPs</li>
            <li>Web MVPs</li>
            <li>SaaS MVPs</li>
            <li>Webflow Builds</li>
            <li>SaaS UI/UX</li>
            <li>App UI Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
