import './designcards.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AppDesignCard() {
  return (
    <React.Fragment>
      <Link to="/app-design" className='appDesignCard'>
        <div className='appDesignCard'>
          <h1>App Design</h1>
          <p>View Projects</p>
        </div>
      </Link>
    </React.Fragment>
  )
}
