import React from 'react';
import logoDark from '../assets/shared/desktop/logo-dark.png';

export default function Title() {
  return (
    <div className='flex m-5 justify-between items-center'>
      <img src={logoDark} style={{ width: 250 }} alt="Designo Logo" />
      <div className='flex gap-6'>
        <span>Our Company</span>
        <span>Locations</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
