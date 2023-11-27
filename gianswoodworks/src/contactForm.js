import React, {useState} from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import firebase from './firebase';
import fireDb from "./firebase";
// import db from "./firebase";
import './App.css';
import { addDoc, collection } from 'firebase/firestore';

function Tab3Content() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const {name, email, phone, message} = state;
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !email || !message) {
      toast.error("Please provide all required fields, thanks!");
    } else {
      try {
        const emailsCollection = collection(fireDb, "emails");
        const docRef = await addDoc(emailsCollection, state);

        console.log("Document written with ID: ", docRef.id);

        setState({name: "", email: "", phone: "", message: "" }); 
        toast.success("Form submitted successfully!");
    } catch(error) {
        console.error("Error adding document: ", error);
        toast.error("An error occurred. Please try again later.");
    }
  }
  };

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };

  return (
    <section className="contact-form">
        <div className="container ">
          <ToastContainer position="top-center"/>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10">
                    <div className="wrapper contact-wrap w-100 p-lg-5 p-4">
                      <h2 >Send Me an Email!</h2>
                      <p>Please provide all required info and write a brief message about what you are interested in having made. If you love something you see on the website and would like to have a similar one crafted, please reference the photo by the number underneath it (e.g. "I would like something similiar to photo 12"). Thanks!
                      </p>
                      <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              type="text"
                              className="form-control custom-placeholder-color"
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
                              className="form-control custom-placeholder-color"
                              name="email"
                              placeholder="Email (required)"
                              onChange={handleInputChange}
                              value={email}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 ">
                            <div className="form-group">
                              <input
                              type="tel"
                              className="form-control custom-placeholder-color"
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
                              className="form-control custom-placeholder-color"
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
                              <input type="submit" value="Send Email" className="btn btn-primary"/>                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div className="col-md-6 d-flex align-items-stretch">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
  );
}

export default Tab3Content;
