import React, { useState } from "react";
import "./App.css";

    const SubTab1Content = () => (
        <div>
          <h3>Sub Tab 1 Content</h3>
          {"hello"}
        </div>
      );
      
      const SubTab2Content = () => (
        <div>
          <h3>Sub Tab 2 Content</h3>
          {"hi"}
        </div>
      );
      
      function Tab1Content() {
        const [activeSubTab, setActiveSubTab] = useState('subTab');
      
        const renderSubContent = () => {
          switch (activeSubTab) {
            case 'subTab1':
              return <SubTab1Content />;
            case 'subTab2':
              return <SubTab2Content />;
            default:
              return null;
          }
        };


    return (
        <>
        <div>
      <h2>Gian's Woodworks</h2>
      <nav>
        <button onClick={() => setActiveSubTab('subTab1')}>Sub Tab 1</button>
        <button onClick={() => setActiveSubTab('subTab2')}>Sub Tab 2</button>
      </nav>
      <div>{renderSubContent()}</div>
    </div>
    </>
  );
};
      

  
  export default Tab1Content;
  