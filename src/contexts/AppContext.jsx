import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContextContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  };
  return context;
};

export const AppContextProvider = ({ children }) => {

  const contextValue = {
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};