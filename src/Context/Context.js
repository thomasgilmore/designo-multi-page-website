import React, { createContext, useState, useEffect } from "react";

const DesignoContext = createContext();

const DesignoContextProvider = ({ children }) => {

  const value = {
    
  }
  return (
    <DesignoContext.Provider value={value}>
      {children}
    </DesignoContext.Provider>
  )
}
export { DesignoContextProvider, DesignoContext };