import './location.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import imageMapAustraliaDesktop from '../assets/locations/desktop/image-map-australia.png';
import imageMapAustraliaTablet from '../assets/locations/tablet/image-map-australia.png';
import imageMapCanadaDesktop from '../assets/locations/desktop/image-map-canada.png';
import imageMapCanadaTablet from '../assets/locations/tablet/image-map-canada.png';
import imageMapUnitedKingdomDesktop from '../assets/locations/desktop/image-map-united-kingdom.png';
import imageMapUnitedKingdomTabelt from '../assets/locations/tablet/image-map-uk.png';
import bgPatternTwoCircles from '../assets/shared/desktop/bg-pattern-two-circles.svg';
import GetInTouch from './GetInTouch';

export default function Locations() {
  return (
    <div>
      <Container>
      
      <div className='canadaContainer'>
        <div className='canadaDiv'>
          <h1>Canada</h1>
          <div className='canadaTextContainer'>
            <div className='canadaOfficeAddress'>
              <p><b>Designo Central Office</b></p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className='candaOfficeNumber'>
              <p><b>Contact</b></p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <img src={imageMapCanadaTablet} srcSet={`${imageMapCanadaTablet} 768w, ${imageMapCanadaDesktop} 1280w`} alt="Map of Canada" className='imageMapCanada' /> 
      </div>

      <div className='australiaContainer'>
        <img src={imageMapAustraliaTablet} srcSet={`${imageMapAustraliaTablet} 768w, ${imageMapAustraliaDesktop} 1280w`} alt="Map of Australia" className='imageMapAustralia' /> 
        <div className='australiaDiv'>
          <h1>Australia</h1>
          <div className='australiaTextContainer'>
            <div className='australiaOfficeAddress'>
              <p><b>Designo AU Office</b></p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div className='australiaOfficeNumber'>
              <p><b>Contact</b></p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>

      <div className='unitedKingdomContainer'>
        <div className='unitedKindfomDiv'>
          <h1>United Kingdom</h1>
          <div className='unitedKingdomTextContainer'>
            <div className='unitedKingdomOfficeAddress'>
              <p><b>Designo UK Office</b></p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className='unitedKingdomOfficeNumber'>
              <p><b>Contact</b></p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
        <img src={imageMapUnitedKingdomTabelt} srcSet={`${imageMapUnitedKingdomTabelt} 768w, ${imageMapUnitedKingdomDesktop} 1280w`} alt="Map of United Kingdom" className='imageMapUnitedKingdom' /> 
      </div>

      </Container>
      <GetInTouch />
    </div>
  )
}
