import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renders the App component into the root div
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
