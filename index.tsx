import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// App component, React, and ReactDOM are all loaded globally before this script.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);