import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Menu  from './Menu1';
import reportWebVitals from './reportWebVitals';
import Drop from './Drop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Menu/>
  </React.StrictMode>
);


reportWebVitals();
