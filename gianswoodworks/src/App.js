import React, {useState} from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import fireDB from "./firebase";
import './App.css';

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const {name, email, phone, message} = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !message) {
      toast.error("Please provide all required fields, thanks!");
    } else {
        fireDB.child("emails").push(state);
        setState({name: "", email: "", phone: "", message: "" }); 
        toast.success("Form submitted successfully!");
    }

  };

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };

  return (
    <section className="contact-form">
        <div className="container">
          <ToastContainer position="top-center"/>
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
                              placeholder="Full Name (required)"
                              onChange={handleInputChange}
                              value={name}
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
                              value={email}
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
                              value={phone}
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
                              value={message}
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
                            <span>Address:</span> 123 sample address, dallas, TX 78000
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span>Phone:</span> 555-555-5555
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
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
