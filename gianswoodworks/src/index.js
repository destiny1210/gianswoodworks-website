import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tab1Content from './home';
import Tab2Content from './aboutMe.js';
import Tab3Content from './contactForm.js';
import reportWebVitals from './reportWebVitals';


const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Tab1Content />;
      case 'aboutMe':
        return <Tab2Content />;
      case 'contactForm':
        return <Tab3Content />;
      default:
        return null;
    }
  };

  return (
  <React.StrictMode>
    <div className='container'>
      <div className='navbar'>
        <img src="gianslogo.jpeg" alt="..."/>
        <nav className='nav-tabs'>
            <button onClick={() => setActiveTab('home')}>Home</button>
            <button onClick={() => setActiveTab('aboutMe')}>About Me</button>
            <button onClick={() => setActiveTab('contactForm')}>Contact Form</button>
        </nav>
      </div>
        <div>{renderTabContent()}</div>

      <footer>
        <p>Website Created by Destiny Simpkins</p>
      </footer>
    </div>    
  </React.StrictMode>
);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
