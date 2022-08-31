import React, { useContext } from 'react';
import { DesignoContext } from '../Context/Context'; 
import './appdesign.css';
import Container from 'react-bootstrap/Container';
import bgPatternIntroApp from '../assets/app-design/desktop/bg-pattern-intro-app.svg';
import WebDesignCard from './WebDesignCard';
import GraphicDesignCard from './GraphicDesignCard';
import GetInTouch from './GetInTouch';
import Card from './Card';

export default function AppDesign() {
  const { appDesignCards } = useContext(DesignoContext);
  return (
    <div>
      <Container>
      <div className='appDesignDiv'>
        <h1>App Design</h1>
        <p>Our mobile designs bring intuitive digital solutions</p> 
        <p>to your customers right at their fingertips.</p>
        <img src={bgPatternIntroApp} className="bgPatternIntroApp" alt="Background Pattern Intro App" />
      </div>
    
      <div className='appDesignCardsDiv'>
    
      {appDesignCards.map((card) => {
        return <Card key={card.title} props={card.title} img={card.img} title={card.title} text1={card.text1} text2={card.text2} />
      })}

      </div>
  
      <div className='graphicDesignAndWebDesign'>
        <WebDesignCard />
      
        <GraphicDesignCard />
      </div>

      </Container>
      <GetInTouch />
    </div>
  )
}
