import './graphicdesign.css';
import React, { useContext } from 'react';
import { DesignoContext } from '../Context/Context';
import Container from 'react-bootstrap/Container';
import bgPatternIntroGraphic from '../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import Card from './Card';
import AppDesignCard from './AppDesignCard';
import WebDesignCard from './WebDesignCard';
import GetInTouch from './GetInTouch';

export default function GraphicDesign() {
  const { graphicDesignCards } = useContext(DesignoContext);
  return (
    <div>
      <Container>
      <div className='graphicDesignDiv'>
        <h1>Graphic Design</h1>
        <p>We deliver eye-catching branding materials that are</p> 
        <p>tailored to meet your business objectives.</p>
        <img src={bgPatternIntroGraphic} className="bgPatternIntroGraphic" alt="Background Pattern Intro Graphic" />
      </div>

      <div className='graphicDesignCardsDiv'>
        {graphicDesignCards.map((card) => {
          return <Card key={card.title} img={card.img} title={card.title} text1={card.text1} text2={card.text2} />
        })}
      </div>
  
      <div className='appDesignAndWebDesign'>
        <AppDesignCard />
        <WebDesignCard />
      </div>

    </Container>
    <GetInTouch />
  </div>
  )
}
