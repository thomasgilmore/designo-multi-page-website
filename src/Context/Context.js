import React, { createContext } from "react";
import imageBlogr from '../assets/web-design/desktop/image-blogr.jpg';
import imageBuilder from '../assets/web-design/desktop/image-builder.jpg';
import imageCamp from '../assets/web-design/desktop/image-camp.jpg';
import imageExpress from '../assets/web-design/desktop/image-express.jpg';
import imagePhoton from '../assets/web-design/desktop/image-photon.jpg';
import imageTransfer from '../assets/web-design/desktop/image-transfer.jpg';

const DesignoContext = createContext();

const DesignoContextProvider = ({ children }) => {
  const webDesignCards = [
    {
      img: imageExpress,
      title: 'Express',
      text1: 'A multi-carrier shipping website for',
      text2: 'ecommerce businesses'
    },
    {
      img: imageTransfer,
      title: 'Transfer',
      text1: 'Site for low-cost money transfers and', 
      text2: 'sending money within seconds'
    },
    {
      img: imagePhoton,
      title: 'Photon',
      text1: 'A state-of-the-art music player with',
      text2: 'high-resolution audio and DSP effects'
    },
    {
      img: imageBuilder,
      title: 'Builder',
      text1: 'Connects users with local contractors',
      text2: 'based on their location'
    },
    {
      img: imageBlogr,
      title: 'Blogr',
      text1: 'Blogr is a platform for creating an online',
      text2: 'blog or publication'
    },
  
    {
      img: imageCamp,
      title: 'Camp',
      text1: 'Get expert training in coding, data,',
      text2: 'design, and digital marketing'
    }
  ]


  const value = {
    webDesignCards,
  }
  return (
    <DesignoContext.Provider value={value}>
      {children}
    </DesignoContext.Provider>
  )
}
export { DesignoContextProvider, DesignoContext };