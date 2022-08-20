import './getintouch.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import callToAction from '../assets/shared/desktop/bg-pattern-call-to-action.svg';

export default function GetInTouch() {
  return (
    <React.Fragment>
      <Container>
        <div className='getInTouchContainer'>
          <div className='getInTouchText'>
            <h1 className='letsTalkAboutTitle'>Let's talk about</h1>
            <h1 className='yourProjectTitle'>your project</h1>
            <p className='readyToTakeText'>Ready to take it to the next level? Contact us today and find out how</p> 
            <p className='ourExpertiseCanText'>our expertise can help your business grow.</p>
          </div>
          <button className='getInTouchButton'>Get in touch</button>
          <img src={callToAction} className="callToActionImage" alt="Call To Action Background" />
        </div>
      </Container>
      <div className='connectionToFooter'></div>
    </React.Fragment>
  )
}
