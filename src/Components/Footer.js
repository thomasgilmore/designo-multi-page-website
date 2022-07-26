import React from 'react';
import logoLight from '../assets/shared/desktop/logo-light.png';

export default function Footer() {
  return (
    <div className='p-5' style={{ backgroundColor: '#1D1C1E', color: '#fff' }}>
      <div className='flex justify-between items-center'>
      <img src={logoLight} style={{ width: 250 }} alt="Designo Logo" />
      Our Company
      Locations
      Contact
      </div>

      <div className='flex'>
        <div className='flex flex-col'>
          <span>Designo Central Office</span>
          <span>3886 Wellington Street</span>
          <span>Toronto, Ontario M9C 3J5</span>
        </div>
        <div className='flex flex-col'>
          <span>Contact Us (Central Office)</span>
          <span>P : +1 253-863-8967</span>
          <span>M : contact@designo.co</span>
        </div>
      </div>
    </div>
  )
}
