import React from 'react'
import bgPatternHeroHome from '../assets/home/desktop/bg-pattern-hero-home.svg';
import imageHeroPhone from '../assets/home/desktop/image-hero-phone.png';
import illustrationFriendly from '../assets/home/desktop/illustration-friendly.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Hidden } from '@mui/material';

export default function Home() {
  return (
    <div>

    <div className='bg-[#E7816B] m-auto' style={{ height: 440, width: '80%', overflow: 'hidden', position: 'relative', borderRadius: 20 }}>
      <Typography style={{ marginTop: 45, marginLeft: 40, color: '#fff' }} variant="h4" component="div">
        Award-winning custom<br/> designs and digital<br/> branding solutions
      </Typography>
    
      <Typography style={{ marginTop: 25, marginLeft: 40, color: '#fff' }} variant='p' component="div">With over 10 years in the industry, we are experienced in<br/> creating fully responsive websites, app design, 
      and engaging<br/> brand experiences. Find out more about our services.</Typography>

      <Button style={{ marginTop: 25, marginLeft: 40, backgroundColor: '#fff', color: '#000' }} variant="contained">Learn more</Button>

      <img src={bgPatternHeroHome} style={{ maxHeight: 640, position: 'absolute', top: 0, right: 0 }} alt="Circle Pattern" />
      <img src={imageHeroPhone} style={{ maxHeight: 572, position: 'absolute', top: 20, right: 0 }} alt="Phone" />
    </div>
    
    Web Design
    View Projects
    
    App Design
    View Projects
    
    Graphic Design
    View Projects
    
    Passionate
    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
    art, design, and technology into exciting new solutions.
    
    Resourceful
    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
    collaboration. It guarantees superior results that fulfill our clients’ needs.
    
    Friendly
    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
    strive to give them the best experience a company can provide.
    
    Let’s talk about your project
    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
    Get in touch
    </div>
  )
}
