import React from 'react';
import './appdesign.css';
import Container from 'react-bootstrap/Container';
import WebDesignCard from './WebDesignCard';
import GraphicDesignCard from './GraphicDesignCard';
import GetInTouch from './GetInTouch';

export default function AppDesign() {
  return (
    <div>
      <Container>
    App design
    Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
  
    Airfilter
    Solving the problem of poor indoor air quality by filtering the air
  
    Eyecam
    Product that lets you edit your favorite photos and videos at any time
  
    Faceit
    Get to meet your favorite internet superstar with the faceit app
  
    Todo
    A todo app that features cloud sync with light and dark mode
  
    Loopstudios
    A VR experience app made for Loopstudios
  
      <div className='graphicDesignAndWebDesign'>
        <WebDesignCard />
      
        <GraphicDesignCard />
      </div>

      </Container>
      <GetInTouch />
    </div>
  )
}
