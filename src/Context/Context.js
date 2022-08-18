import React, { createContext, useState, useEffect } from "react";

const DesignoContext = createContext();

const DesignoContextProvider = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setMobileNavOpen(!mobileNavOpen);
  }

  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('rezise', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [])


  const value = {
    windowSize, 
    setWindowSize,
    mobileNavOpen,
    setMobileNavOpen,
    handleMobileNavOpen
  }
  return (
    <DesignoContext.Provider value={value}>
      {children}
    </DesignoContext.Provider>
  )
}
export { DesignoContextProvider, DesignoContext };