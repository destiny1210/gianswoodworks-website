import React, { useState, Container } from "react";
import "./App.css";

    const SubTab1Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Tables
            </div>
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/117765358_168574041406953_8168737415780411001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Ny-gLOciEqsAX8LgOs_&_nc_ht=scontent-hou1-1.xx&oh=00_AfADlyLIm-aMbEtXucMv7H2SB-YGiPuXP1DLSW7g9VqUMA&oe=65852C8D" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
      
      const SubTab2Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Chairs
            </div>
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/117765358_168574041406953_8168737415780411001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Ny-gLOciEqsAX8LgOs_&_nc_ht=scontent-hou1-1.xx&oh=00_AfADlyLIm-aMbEtXucMv7H2SB-YGiPuXP1DLSW7g9VqUMA&oe=65852C8D" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

      const SubTab3Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Barn Doors
            </div>
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/117765358_168574041406953_8168737415780411001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Ny-gLOciEqsAX8LgOs_&_nc_ht=scontent-hou1-1.xx&oh=00_AfADlyLIm-aMbEtXucMv7H2SB-YGiPuXP1DLSW7g9VqUMA&oe=65852C8D" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

      const SubTab4Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Dressers/ Chests
            </div>
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/117765358_168574041406953_8168737415780411001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Ny-gLOciEqsAX8LgOs_&_nc_ht=scontent-hou1-1.xx&oh=00_AfADlyLIm-aMbEtXucMv7H2SB-YGiPuXP1DLSW7g9VqUMA&oe=65852C8D" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );

      const SubTab5Content = () => (
        <div className="subtab-content">
            <div className="subtab-titles">
                Unique
            </div>
            <div class="card-container row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/117765358_168574041406953_8168737415780411001_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Ny-gLOciEqsAX8LgOs_&_nc_ht=scontent-hou1-1.xx&oh=00_AfADlyLIm-aMbEtXucMv7H2SB-YGiPuXP1DLSW7g9VqUMA&oe=65852C8D" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/326129720_1364898330936655_8075405410832254533_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dOXLm-3avNQAX-mIGae&_nc_oc=AQnjtPXGki6ZnE-iWeZQIvJce2tmrfAk-eTSr9xk3jtu9T9uY0Pa5rCy4yLx6CPZWn74QsaQ3YvrSKHABRuEHG81&_nc_ht=scontent-hou1-1.xx&oh=00_AfBCw7-di5Yp0dddpbiXnAB2eH24VMNl5UQWzTLfb4OT4g&oe=6562F506" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/316098778_576106137853620_7131654424388674613_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hn4a5yHLLhIAX_iF0cp&_nc_ht=scontent-hou1-1.xx&oh=00_AfCcwU75DgTh-GNpj6ImaSmg4vmIpdeTkXnd5qbTZpn7uA&oe=6561C4F7" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a short card.</p> */}
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/225977550_350856413178714_1982447498930010227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oXHXtMt4ybgAX87IgTf&_nc_ht=scontent-hou1-1.xx&oh=00_AfBMjyWdDzn-ZOx3g1y2BZOg0n1nw4ao5bHTTjIa8AdgrQ&oe=6562C1C0" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
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
                    <button onClick={() => setActiveSubTab('subTab1')}>Tables</button>
                    <button onClick={() => setActiveSubTab('subTab2')}>Chairs</button>
                    <button onClick={() => setActiveSubTab('subTab3')}>Barn Doors</button>
                    <button onClick={() => setActiveSubTab('subTab4')}>Dressers/ Chests</button>
                    <button onClick={() => setActiveSubTab('subTab5')}>Unique</button>
                </nav>
            <div>{renderSubContent()}</div>
        </div>
    </>

  );
};
      

  
  export default Tab1Content;
  