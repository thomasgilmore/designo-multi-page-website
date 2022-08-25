import './designcards.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function WebDesignCard() {
  return (
    <React.Fragment>
      <Link to="/web-design" className='webDesignCard'>
        <div className='webDesignCard'>
          <h1>Web Design</h1>
          <p>View Projects</p>
        </div>
      </Link>
    </React.Fragment>
  )
}
