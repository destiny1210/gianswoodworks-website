import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tab1Content from './home';
import Tab2Content from './aboutMe.js';
import Tab3Content from './contactForm.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tab1Content />
    <Tab2Content />
    <Tab3Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
