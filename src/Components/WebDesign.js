import './webdesign.css';
import React, { useContext } from 'react';
import { DesignoContext } from '../Context/Context'; 
import Container from 'react-bootstrap/Container';
import AppDesignCard from './AppDesignCard';
import GraphicDesignCard from './GraphicDesignCard';
import GetInTouch from './GetInTouch';
import bgPatternIntroWeb from '../assets/web-design/desktop/bg-pattern-intro-web.svg';
import Card from './Card';

export default function WebDesign() {
  const { webDesignCards } = useContext(DesignoContext);
  return (
    <div>
      <Container>
      <div className='webDesignDiv'>
        <h1>Web Design</h1>
        <p>We build websites that serve as powerful marketing tools</p> 
        <p>and bring memorable brand experiences.</p>
        <img src={bgPatternIntroWeb} className="bgPatternIntroWeb" alt="Background Pattern Intro Web" />
      </div>

      <div className='webDesignCardsDiv'>
    
      {webDesignCards.map((card) => {
        return <Card props={card.title} img={card.img} title={card.title} text1={card.text1} text2={card.text2} />
      })}

      </div>
   
      <div className='graphicDesignAndAppDesign'>
  
          <AppDesignCard />
    
          <GraphicDesignCard />
      </div>

      </Container>
      <GetInTouch />
    </div>
  )
}
