import logo from './logo.svg';
import './App.css';

function App() {

  const handleSubmit = () => {

  }

  const handleInputChange = () => {};
  return (
    <section className="contact-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h5 className="mb-4">Send Me an Email!</h5>
                      <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="First Name (required)"
                              onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Last Name (required)"
                              onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email (required)"
                              onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              placeholder="Phone Number (optional)"
                              onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                              type="message"
                              className="form-control"
                              name="message"
                              placeholder="Message (required)"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" value="send Message" className="btn btn-primary"/>                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                      <h3>Contact Me!</h3>
                      <p className="mb-4"> Please provide a brief description about what type of item/items you would like to have made!</p>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Address:</span> 2539 golden rain san antonio texas 78245
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span> 12202629654
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Email:</span>
                            <a href="#">yoursite@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
  );
}

export default App;
