import React from 'react';
import logoDark from '../assets/shared/desktop/logo-dark.png';

export default function Title() {
  return (
    <div className='flex m-5 justify-between items-center'>
      <img src={logoDark} style={{ width: 250 }} alt="Designo Logo" />
      <span>
        Our Company
        Locations
        Contact
      </span>
    </div>
  )
}
