import React from 'react';
import logoDark from '../assets/shared/desktop/logo-dark.png';

export default function Title() {
  return (
    <div className='flex'>
      <img src={logoDark} alt="Designo Logo" />
      Our Company
      Locations
      Contact
    </div>
  )
}
