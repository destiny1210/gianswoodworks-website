import React, {useState, useRef} from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import firebase from './firebase';
import fireDb from "./firebase";
// import db from "./firebase";
import './App.css';
import { addDoc, collection } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

function Tab3Content() {
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: ""
  // });

  // const {name, email, phone, message} = state;
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if(!name || !email || !message) {
  //     toast.error("Please provide all required fields, thanks!");
  //   } else {
  //     try {
  //       const docRef = await addDoc(collection(fireDb, "emails"), {
  //         state: state,
  //       });
        
  //       console.log("Document written with ID: ", docRef.id);

  //       setState({name: "", email: "", phone: "", message: "" }); 
  //       toast.success("Form submitted successfully!");
  //   } catch(error) {
  //       console.error("Error adding document: ", error);
  //       toast.error("An error occurred. Please try again later.");
  //   }
  // }
  // };

  // const handleInputChange = (e) => {
  //   let {name, value} = e.target;
  //   setState({...state, [name]: value});
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_f9joea9', 
      'template_dk2cn3b', 
      form.current, 
      'Yw3ZMf7kI2abuzJxh'
      )

      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <>
    <div className="contact-form " >
        
          <ToastContainer position="top-center"/>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10">
                    <div className="wrapper contact-wrap  p-lg-5 p-4">
                      <h1 >Contact Me!</h1>
                      <p>Please provide all required info and write a brief message about what you are interested in having made. If you love something you see on the website and would like to have something similiar crafted, please reference the photo by the number underneath it (e.g. "I would like something similiar to photo 12"). Thanks!
                      </p>
                      <form ref={form} id="contactForm" className="contactForm" onSubmit={sendEmail}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                              type="text"
                              className="form-control custom-placeholder-color"
                              name="name"
                              placeholder="Full Name (required)"
                              // onChange={handleInputChange}
                              // value={name}
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
                              // onChange={handleInputChange}
                              // value={email}
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
                              // onChange={handleInputChange}
                              // value={phone}
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
                              // onChange={handleInputChange}
                              // value={message}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input 
                              type="submit" 
                              value="Send" 
                              className="btn"
                              />                            
                            </div>
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
   

    <section>
      <div className="info-wrap w-100 p-lg-5 p-4 img socials">
          <h1>Social Media</h1>
        <div className="dbox w-100 d-flex justify-content-center social-icon ">
          <a href="https://www.instagram.com/gians_woodworks/" className="social-links text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
            </svg>
              Instagram: @gians_woodworks         
            </a> 
        </div>
        <div className="dbox w-100 d-flex justify-content-center social-icon">
          <a href="https://www.facebook.com/gianswoodworks" className="text-decoration-none social-links">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
            </svg>
               Facebook: Gian's Woodworks
          </a>
         </div>
        </div>
    </section>
  </>
    
  );
}

export default Tab3Content;
