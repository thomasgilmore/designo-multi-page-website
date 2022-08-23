import React from 'react';
import './card.css';

export default function Card({ img, title, text1, text2 }) {
  return (
    <React.Fragment>
      <div className='cardDiv'>
        <img src={img} className="cardImg" alt="card image" />
        <div className='cardTextDiv'>
          <h3 className='cardTitle'>{title}</h3>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </React.Fragment>
  )
}
