import React, { useContext } from 'react';
import { DesignoContext } from '../Context/Context';
import logoLight from '../assets/shared/desktop/logo-light.png';
import iconFacebook from '../assets/shared/desktop/icon-facebook.svg';
import iconInstagram from '../assets/shared/desktop/icon-instagram.svg';
import iconPinterest from '../assets/shared/desktop/icon-pinterest.svg';
import iconTwitter from '../assets/shared/desktop/icon-twitter.svg';
import iconYouTube from '../assets/shared/desktop/icon-youtube.svg';

export default function Footer() {
  const { windowSize } = useContext(DesignoContext);

  return (
    <div className='p-5' style={{ backgroundColor: '#1D1C1E' }}>
      <div className='flex justify-between items-center'>
        <img src={logoLight} style={{ width: 250 }} alt="Designo Logo" />
        {windowSize.innerWidth > 640 ? <div className='flex gap-6' style={{ color: '#fff' }}>
          <span>Our Company</span>
          <span>Locations</span>
          <span>Contact</span>
        </div> : null }
      </div>

      <hr style={{ color: '#808080', marginTop: 30, marginBottom: 30 }} />

      <div className='flex flex-col text-center gap-4 justify-between sm:flex-row sm:text-left' style={{ color: "#D3D3D3" }}>
      {windowSize.innerWidth < 640 ? 
        <div className='flex flex-col gap-6' style={{ color: '#fff' }}>
          <span>Our Company</span>
          <span>Locations</span>
          <span>Contact</span>
        </div> : null }
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
        <div className='flex gap-4 items-end mx-auto my-4 sm:m-2'>
          <img src={iconFacebook} style={{ width: 30, height: 30 }} alt="Facebook Icon" />
          <img src={iconYouTube} style={{ width: 30, height: 30 }} alt="YouTube Icon" />
          <img src={iconTwitter} style={{ width: 30, height: 30 }} alt="Twitter Icon" />
          <img src={iconPinterest} style={{ width: 30, height: 30 }} alt="Pinterest Icon" />
          <img src={iconInstagram} style={{ width: 30, height: 30 }} alt="Instagram Icon" />
        </div>
      </div>
    </div>
  )
}
