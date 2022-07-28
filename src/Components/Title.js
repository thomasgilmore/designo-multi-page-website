import React, { useContext } from 'react';
import { DesignoContext } from '../Context/Context';
import logoDark from '../assets/shared/desktop/logo-dark.png';
import iconClose from '../assets/shared/mobile/icon-close.svg';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';

export default function Title() {
  const { windowSize, mobileNavOpen, handleMobileNavOpen } = useContext(DesignoContext);

  return (
    <span>
      <div className='flex m-5 justify-between items-center'>
        <img src={logoDark} style={{ width: 250 }} alt="Designo Logo" />
        {windowSize.innerWidth > 640 ? <div className='flex gap-6'>
          <span>Our Company</span>
          <span>Locations</span>
          <span>Contact</span>
        </div> 
        : <button onClick={handleMobileNavOpen}>
            {mobileNavOpen ? 
              <img src={iconClose} alt="Close Icon" /> 
              : <img src={iconHamburger} alt="Hamburger Icon" />}
          </button>
        }
      </div>
      {mobileNavOpen ? 
        <div className='flex flex-col text-center gap-6'>
          <span>Our Company</span>
          <span>Locations</span>
          <span>Contact</span>
        </div> 
      : null }
    </span>
  )
}
