import './home.css';
import React from 'react'
import bgPatternHeroHome from '../assets/home/desktop/bg-pattern-hero-home.svg';
import imageHeroPhone from '../assets/home/desktop/image-hero-phone.png';
import illustrationFriendly from '../assets/home/desktop/illustration-friendly.svg';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Hidden } from '@mui/material';

export default function Home() {
  return (
    <div>
    <Container>
    
    <div className='awardWinningDiv'>
      <div className='awardWinningDivText'>
        <h4 className='awardWinningTitle'>Award-winning custom</h4>
        <h4 className='designsAndDigitalTitle'>designs and digital</h4>
        <h4 className='brandingSolutionsTitle'>branding solutions</h4>
        
        <p className='withOverText'>With over 10 years in the industry, we are experienced in</p> 
        <p className='creatingFullyText'>creating fully responsive websites, app design, and engaging</p>
        <p className='brandExperiencesText'>brand experiences. Find out more about our services.</p>

        <button className='learnMoreButton'>Learn more</button>
      </div>

      <img src={bgPatternHeroHome} className="cirlce" alt="Circle Pattern" />
      <img src={imageHeroPhone} className="iPhone" alt="Phone" />
    </div>

    <div className='threeImagesStack'>
      <div className='webDesign'>
        <h1>Web Design</h1>
        <p>View Projects</p>
      </div>
      <div className='appDesignAndGraphicDesign'>
        <div className='appDesign'>
          <h1>App Design</h1>
          <p>View Projects</p>
        </div>
        <div className='graphicDesign'>
          <h1>Graphic Design</h1>
          <p>View Projects</p>
        </div>
      </div>
    </div>
    
    Passionate
    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
    art, design, and technology into exciting new solutions.
    
    Resourceful
    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
    collaboration. It guarantees superior results that fulfill our clients’ needs.
    
    Friendly
    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
    strive to give them the best experience a company can provide.
    
    Let’s talk about your project
    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
    Get in touch
    </Container>
    </div>
  )
}
