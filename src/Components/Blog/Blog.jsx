import React from 'react';
import './Blog.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';
import blog5 from '../../assets/blog5.png';
import blog6 from '../../assets/blog6.png';
import blog7 from '../../assets/blog7.png';
import blog8 from '../../assets/blog8.png';


const Blog = () => {
  const blogPosts = [
    {
      img: blog1,
      title: '5 UI/UX Trends to Watch in 2025',
      desc: 'Stay ahead with the latest user interface and experience design trends that are shaping the digital world.',
      link: '#',
    },
    {
      img: blog2,
      title: 'MVP Development: Speed vs. Quality',
      desc: 'How to balance speed and performance when building your Startup MVP for faster market entry.',
      link: '#',
    },
    {
      img: blog3,
      title: 'Why Webflow is Great for Startups',
      desc: 'Discover why Webflow is becoming the go-to website platform for startups needing fast and responsive websites.',
      link: '#',
    },
     {
    img: blog3,
    title: 'Why Webflow is Great for Startups',
    desc: 'Discover why Webflow is becoming the go-to website platform for startups needing fast and responsive websites.',
    link: '#',
  },
  {
    img: blog4,
    title: 'Boosting Conversion Rates with Better UX',
    desc: 'Learn how small UX tweaks can lead to higher user engagement and conversion rates.',
    link: '#',
  },
  {
    img: blog5,
    title: 'Top SaaS Design Patterns for 2025',
    desc: 'Explore the latest SaaS UI/UX design patterns that will dominate in the coming year.',
    link: '#',
  },
  {
    img: blog6,
    title: 'Agile Development for Startups',
    desc: 'How startups can benefit from agile methodology for faster MVP delivery and iteration.',
    link: '#',
  },
  {
  img: blog7,
  title: 'Custom Software Solutions for Business Growth',
  desc: 'Discover how tailor-made software can streamline operations, improve efficiency, and drive business growth.',
  link: '#',
},
{
  img: blog8,
  title: 'How to Scale Your SaaS Product Effectively',
  desc: 'Learn key strategies for scaling your SaaS product to handle more users while maintaining performance and usability.',
  link: '#',
},

];
  

  return (
    <section className='blog-section' id='blog'>
      <h2>Latest Insights</h2>
      <p className='blog-subtitle'>Explore trends, tips, and tech insights from Echomind</p>

      <div className='blog-list'>
        {blogPosts.map((post, index) => (
          <div className='blog-card' key={index}>
            <img src={post.img} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <a href={post.link} className='read-more'>Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
