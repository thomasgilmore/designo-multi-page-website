import './contact.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Places from './Places';

export default function Contact() {
  return (
    <div>
      <Container>
        <div className='contactUsContainer'>
          <div className='contactUsDiv'>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let's talk about your project or idea and find out how 
            we can help your business grow. If you are looking for unique digital experiences that's 
            relatable to your users, drop us a line.
          </p>
          </div>
          <form className='contactForm'>
            <input type="text" placeholder='Name' className='contactFormNameInput' />
            <input type="email" placeholder='Email' className='contactFormEmailInput' />
            <input type="text" placeholder='Phone' className='contactFormPhoneInput' />
            <textarea placeholder='Your Message' className='contactFormYourMessageText' />
            <button className='contactSubmitButton' >Submit</button>
          </form>
        </div>
        <Places />
    </Container>
  </div>
  )
}
