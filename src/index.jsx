import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContext';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
