import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Services' title='Empowering Startups & Businesses with Scalable Digital Solutions' />
        <Services />
        <Title subTitle='About Us' title='Turning Ideas into Scalable Digital Products' />
        <About />
        <Title subTitle='Our Work' title='Recent Projects '/>
        <Work />
        <Title subTitle="Our Pricing Plans" title="Transparent & Scalable Packages for Growing Teams"/>
        <Pricing/>
        <Blog/>
        <Title  subTitle="Get In Touch" 
  title="Let's Build Something Great Together" />
        <Contact/>
        <Footer/>
       
      </div>
    </div>
  );
};

export default App;
