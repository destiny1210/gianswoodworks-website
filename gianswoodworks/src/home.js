import React, { useState, Container } from "react";
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

      const SubTab3Content = () => (
        <div>
          <h3>Sub Tab 3 Content</h3>
          {"hola"}
        </div>
      );

      const SubTab4Content = () => (
        <div>
          <h3>Sub Tab 4 Content</h3>
          {"hey"}
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
            case 'subTab3':
              return <SubTab3Content />;
            case 'subTab4':
              return <SubTab4Content />;
            default:
              return null;
          }
        };


    return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/324858971_868232851182903_5596039766776392032_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wZfTI05kKggAX8Jw0Ya&_nc_ht=scontent-hou1-1.xx&oh=00_AfAAqMQCkoiCoL4E11Mlr1fNVqMlI-GBSCAsJxhOP7TfWw&oe=6562A877" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.taranecodesigns.co.uk/cdn/shop/products/C9A1528_800x.jpg?v=1595075795" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/317606416_576106157853618_3031461848626480425_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PSQ-DSwNZfkAX_MvhlO&_nc_ht=scontent-hou1-1.xx&oh=00_AfDGccb8RHENF3hzOKnYUpOg3YBhiC8i22EjxUgtKEjrJw&oe=6562F795" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div> 
            <div className="gian-text">
                Gian's Woodworks
            </div>
            <div>
                <nav className="cat-tabs">
                    <button onClick={() => setActiveSubTab('subTab1')}>Sub Tab 1</button>
                    <button onClick={() => setActiveSubTab('subTab2')}>Sub Tab 2</button>
                    <button onClick={() => setActiveSubTab('subTab3')}>Sub Tab 3</button>
                    <button onClick={() => setActiveSubTab('subTab4')}>Sub Tab 4</button>
                </nav>
            <div>{renderSubContent()}</div>
        </div>
    </>

  );
};
      

  
  export default Tab1Content;
  