import React from 'react';
import './Work.css';
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work_icon from '../../assets/work icon.png'
const Work = () => {
  return (
    <section className='work-section' id='work'>
      <div className="work-gallery">
        <div className="work-item">
          <img src={work1} alt="Project 1" />
          <h3>Startup MVP Platform</h3>
          <p>Rapidly built a scalable MVP for a SaaS startup.</p>
        </div>

        <div className="work-item">
          <img src={work2} alt="Project 2" />
          <h3>UI/UX Redesign</h3>
          <p>Improved user engagement through modern UX design.</p>
        </div>

        <div className="work-item">
          <img src={work3} alt="Project 3" />
          <h3>Webflow Website</h3>
          <p>Developed a responsive and SEO-optimized Webflow site.</p>
        </div>
        <button className='btn dark-btn'>See more here <img src={work_icon} alt="" /></button>
      </div>
    </section>
  );
};

export default Work;
