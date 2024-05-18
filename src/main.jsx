import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-loading-skeleton/dist/skeleton.css';
import './index.css';
import {  MainContextProvider } from './context/useMainContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);
