import React, { useState, Container } from "react";
import "./App.css";

    const SubTab1Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Living
            </div>
            {/* <div class="image-container">
                <img src="/living/living1.jpg" alt="" class="flex-item" />
                <img src="/living/living2.JPEG" alt="" class="flex-item" />
                <img src="/living/living3.jpg" alt="" class="flex-item" />
                <img src="/living/living4.JPG" alt="" class="flex-item" />
                <img src="/living/living5.jpg" alt="" class="flex-item" />
                <img src="/living/living6.jpg" alt="" class="flex-item" />
            </div> */}

            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card">
                        <img src="/living/living1.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">1</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">
                        <img src="/living/living2.JPEG" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">2</h1>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/living/living3.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">3</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/living/living4.JPG" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">4</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/living/living5.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h1 class="card-title">5</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/living/living6.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">6</h1>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
      
      const SubTab2Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Desks
            </div>
            {/* <div class="image-container">
                <img src="/desks/desk1.jpg" alt="" class="flex-item"/>
                <img src="/desks/desk2.jpg" alt="" class="flex-item"/>
                <img src="/desks/desk3.jpg" alt="" class="flex-item"/>
                <img src="/desks/desk4.jpg" alt="" class="flex-item"/>
                <img src="/desks/desk5.jpg" alt="" class="flex-item"/>
            </div> */}
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="/desks/desk1.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">7</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/desks/desk2.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">8</h1>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/desks/desk3.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">9</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/desks/desk4.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">10</h1>                               {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/desks/desk5.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">11</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

      const SubTab3Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Doors
            </div>
            {/* <div class="image-container">
                <img src="/doors/door1.jpg" alt="" class="flex-item"/>
                <img src="/doors/door2.jpg" alt="" class="flex-item"/>
                <img src="/doors/door3.jpg" alt="" class="flex-item"/>
                <img src="/doors/door4.jpg" alt="" class="flex-item"/>
                <img src="/doors/door5.jpg" alt="" class="flex-item"/>
                <img src="/doors/door6.jpg" alt="" class="flex-item"/>
                <img src="/doors/door7.jpg" alt="" class="flex-item"/>
            </div> */}
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door1.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">12</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door2.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">13</h1> 
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door3.JPG" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">14</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door4.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door5.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">16</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door6.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">11</h1>                            
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/doors/door7.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">11</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

      const SubTab4Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Dining
            </div>
            {/* <div class="image-container ">
                <div className="img-text">
                    <img src="/dining/dining1.jpg" alt="" class="flex-item " />
                    <div class="text-overlay">Your Text Here</div>
                </div>
                <img src="/dining/dining2.jpg" alt="" class="flex-item" />
                <img src="/dining/dining3.jpg" alt="" class="flex-item" />
                <img src="/dining/dining4.jpg" alt="" class="flex-item" />
            </div> */}
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="/dining/dining1.jpg" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/dining/dining2.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/dining/dining3.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/dining/dining4.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

      const SubTab5Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Boards
            </div>
            {/* <div class="image-container">
                <img src="/boards/board1.jpg" alt="" class="flex-item" />
                <img src="/boards/board2.jpg" alt="" class="flex-item" />
                <img src="/boards/board3.jpg" alt="" class="flex-item" />
                <img src="/boards/board4.jpg" alt="" class="flex-item" />
                <img src="/boards/board5.jpg" alt="" class="flex-item" />
                <img src="/boards/board6.jpg" alt="" class="flex-item" />
                <img src="/boards/board7.jpg" alt="" class="flex-item" />
                <img src="/boards/board8.jpg" alt="" class="flex-item" />
                <img src="/boards/board9.jpg" alt="" class="flex-item" />
            </div> */}
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board1.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board2.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board3.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board4.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board5.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board6.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board7.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board8.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="/boards/board9.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h1 class="card-title">15</h1>                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
            </div>
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
            case 'subTab5':
              return <SubTab5Content />;
            default:
              return <SubTab1Content />;
          }
        };


    return (
    <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
            <div className="gian-text">
                Gian's Woodworks
            </div>
            </div>
            <div className="categories">
                <nav className="cat-tabs">
                    <button onClick={() => setActiveSubTab('subTab1')}>Living</button>
                    <button onClick={() => setActiveSubTab('subTab2')}>Desks</button>
                    <button onClick={() => setActiveSubTab('subTab3')}>Doors</button>
                    <button onClick={() => setActiveSubTab('subTab4')}>Dining</button>
                    <button onClick={() => setActiveSubTab('subTab5')}>Boards</button>
                </nav>
            <div>{renderSubContent()}</div>
        </div>
    </>

  );
};
      

  
  export default Tab1Content;
  