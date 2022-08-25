import './designcards.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GraphicDesignCard() {
  return (
    <React.Fragment>
      <Link to="/graphic-design" className='graphicDesignCard'>
        <div className='graphicDesignCard'>
          <h1>Graphic Design</h1>
          <p>View Projects</p>
        </div>
      </Link>
    </React.Fragment>
  )
}
