import './webdesign.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import AppDesignCard from './AppDesignCard';
import GraphicDesignCard from './GraphicDesignCard';
import GetInTouch from './GetInTouch';
import bgPatternIntroWeb from '../assets/web-design/desktop/bg-pattern-intro-web.svg';

export default function WebDesign() {
  return (
    <div>
      <Container>
      <div className='webDesignDiv'>
        <h1>Web Design</h1>
        <p>We build websites that serve as powerful marketing tools</p> 
        <p>and bring memorable brand experiences.</p>
        <img src={bgPatternIntroWeb} className="bgPatternIntroWeb" alt="Background Pattern Into Web" />
      </div>
    
    
    Express
    A multi-carrier shipping website for ecommerce businesses
  
    Transfer
    Site for low-cost money transfers and sending money within seconds
  
    Photon
    A state-of-the-art music player with high-resolution audio and DSP effects
  
    Builder
    Connects users with local contractors based on their location
  
    Blogr
    Blogr is a platform for creating an online blog or publication
  
    Camp
    Get expert training in coding, data, design, and digital marketing
  
      <div className='graphicDesignAndAppDisign'>
  
          <AppDesignCard />
    
          <GraphicDesignCard />
      </div>

      </Container>
      <GetInTouch />
    </div>
  )
}
