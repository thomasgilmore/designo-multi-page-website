import React, { createContext } from "react";
import imageBlogr from '../assets/web-design/desktop/image-blogr.jpg';
import imageBuilder from '../assets/web-design/desktop/image-builder.jpg';
import imageCamp from '../assets/web-design/desktop/image-camp.jpg';
import imageExpress from '../assets/web-design/desktop/image-express.jpg';
import imagePhoton from '../assets/web-design/desktop/image-photon.jpg';
import imageTransfer from '../assets/web-design/desktop/image-transfer.jpg';
import imageAirFilter from '../assets/app-design/desktop/image-airfilter.jpg';
import imageEyeCam from '../assets/app-design/desktop/image-eyecam.jpg';
import imageFaceit from '../assets/app-design/desktop/image-faceit.jpg';
import imageLoopStudios from '../assets/app-design/desktop/image-loopstudios.jpg';
import imageToDo from '../assets/app-design/desktop/image-todo.jpg';
import imageBoxedWater from '../assets/graphic-design/desktop/image-boxed-water.jpg';
import imageChange from '../assets/graphic-design/desktop/image-change.jpg';
import imageScience from '../assets/graphic-design/desktop/image-science.jpg';

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

  const appDesignCards = [
    {
      img: imageAirFilter,
      title: 'Airfilter',
      text1: 'Solving the problem of poor indoor air', 
      text2: 'quality by filtering the air'
    },
    {
      img: imageEyeCam,
      title: 'Eyecam',
      text1: 'Product that lets you edit your favorite',
      text2: 'photos and videos at any time'
    },
    {
      img: imageFaceit,
      title: 'Faceit',
      text1: 'Get to meet your favorite internet',
      text2: 'superstar with the faceit app'
    },
    {
      img: imageToDo,
      title: 'Todo',
      text1: 'A todo app that features cloud sync with',
      text2: 'light and dark mode'
    },
    { 
      img: imageLoopStudios,
      title: 'Loopstudios',
      text1: 'A VR experience app made for',
      text2: 'Loopstudios'
    }
  ];

  const graphicDesignCards = [
    {
      img: imageChange,
      title: 'Tim Brown',
      text1: "A book cover designed for Tim Brown's",
      text2: "new release, 'Change'"
    },
    {
      img: imageBoxedWater,
      title: 'Boxed water',
      text1: 'A simple packaging concept made for',
      text2: 'Boxed Water'
    },
    {
      img: imageScience,
      title: 'Science!',
      text1: 'A poster made in collaboration with the',
      text2: 'Federal Art Project'
    }
  ]


  const value = {
    webDesignCards,
    appDesignCards,
    graphicDesignCards
  }
  return (
    <DesignoContext.Provider value={value}>
      {children}
    </DesignoContext.Provider>
  )
}
export { DesignoContextProvider, DesignoContext };