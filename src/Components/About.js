import './about.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import GetInTouch from './GetInTouch';
import bgPatternHeroAboutDesktop from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import bgPatternHeroAboutMobile from '../assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import imageAboutHeroDesktop from '../assets/about/desktop/image-about-hero.jpg';
import imageAboutHeroMobile from '../assets/about/mobile/image-about-hero.jpg';
import imageAboutHeroTablet from '../assets/about/tablet/image-about-hero.jpg';

export default function About() {
  return (
    <div>
      <Container>
      <div className='aboutUsDivContainer'>
      <div className='aboutUsDiv'>
      <h1>About Us</h1>
      <p>
        Founded in 2010, we are a creative agency that produces lasting results for our clients. 
        We've partnered with many startups, corporations, and nonprofits alike to craft designs 
        that make real impact. We're always looking forward to creating brands, products, and 
        digital experiences that connect with our clients' audiences.
      </p>
      <img src={bgPatternHeroAboutMobile} srcSet={`${bgPatternHeroAboutMobile} 300w, ${bgPatternHeroAboutDesktop} 768w`} alt="bgPatternHeroAboutDesktop" className='bgPatternHeroAboutDesktop' />
      </div>
      <img src={imageAboutHeroMobile} srcSet={`${imageAboutHeroMobile} 300w, ${imageAboutHeroTablet} 768w, ${imageAboutHeroDesktop} 1280w`} alt="About Hero" className='imageAboutHero' /> 
    </div>
  
    World-class talent
    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
    crafted from concept to launch, ensuring success in its given market. We are constantly updating 
    our skills in a myriad of platforms.
  
    Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
    are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
    Clients have always been impressed with our high-quality outcomes that encapsulates their 
    brand’s story and mission.
  
    The real deal
    As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
    opportunity. We make design and technology more accessible and give you tools to measure success.
  
    We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
    we inspire audiences to take action and drive real results.
  
    Canada
    See location
  
    Australia
    See location
  
    United Kingdom
    See location
    </Container>
    <GetInTouch />
  </div>
  )
}
