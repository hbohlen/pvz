// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';

// Use the new createRoot API from react-dom/client
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
