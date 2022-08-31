import './places.css';
import React from 'react';
import bgPatternSmallCirlce from '../assets/shared/desktop/bg-pattern-small-circle.svg';
import illustrationAustralia from '../assets/shared/desktop/illustration-australia.svg';
import illustrationCanada from '../assets/shared/desktop/illustration-canada.svg';
import illustrationUnitedKingdom from '../assets/shared/desktop/illustration-united-kingdom.svg';

export default function Places() {
  return (
    <div className='placesDiv'>
  
      <div className='placeCanda'>
        <img src={illustrationCanada} alt="Canada" className='illustrationCanada' />
        <img src={bgPatternSmallCirlce} alt="bgPatternSmallCirlce" className='bgPatternSmallCirlce' />
        <h4>Canada</h4>
        <button className='seeLocationButton'>See location</button>
      </div>

      <div className='placeAustralia'>
        <img src={illustrationAustralia} alt="Australia" className='illustrationAustralia' />
        <img src={bgPatternSmallCirlce} alt="bgPatternSmallCirlce" className='bgPatternSmallCirlce' />
        <h4>Australia</h4>
        <button className='seeLocationButton'>See location</button>
      </div>

      <div className='placeUnitedKingdom'>
        <img src={illustrationUnitedKingdom} alt="United Kingdom" className='illustrationUnitedKingdom' />
        <img src={bgPatternSmallCirlce} alt="bgPatternSmallCirlce" className='bgPatternSmallCirlce' />
        <h4>United Kingdom</h4>
        <button className='seeLocationButton'>See location</button>
      </div>

    </div>
  )
}