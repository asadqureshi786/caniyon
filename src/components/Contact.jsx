import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
// import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    function setValue(e){
        const {name, value} = e.target;
        setFormData((previous) =>({
            ...previous,[name]: value
        }))
    }


    async function sendForm(e) {
    e.preventDefault();
    setErrors({}); 
    setLoader(true)

  const res = await fetch('/.netlify/functions/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  console.log(res)
  const data = await res.json();
  console.log(data);

  if (res.ok) {
    setLoader(false)
      toast.success('Your message has been sent!', {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    setFormData({ name: '', email: '', subject: '', message: '' });
  } else {
    // If validation errors, update error state
    setLoader(false)
    if (data.fields) {
      setLoader(false)
      setErrors(data.fields);
    } else {
      // Generic error
      setLoader(false)
      setErrors({ global: data.message || 'Something went wrong.' });
    }
  }
}






    return (
        <>
            <Row className='pb-1 ss mt-5 pt-5 mb-4 justify-content-center' id="contact" >
                <Col md={6}>
                    <div className="contact_us" data-aos="fade-up" >
                        <div className="text-center">
                            <div className="subHead">
                                <PiWarningCircleLight /><span className='text' >Find Us</span>
                            </div>
                            <p className="bigT white my-2">Let'Get In <span class="sm_unique" >Touch</span> </p>
                            <p className="text white subText">Contact us for more information or assistance.</p>
                        </div>
                    </div>
                    <div class="form_list" data-aos="fade-up" >
                        <form onSubmit={sendForm} >
                            <Row>
                                <Col md={12}>
                                    <div className="form-group">
  <label>Name</label>
  <input type="text" name="name" onChange={setValue} value={formData.name} className="form-control" />
  {errors.name && <div className="text-danger">{errors.name}</div>}
</div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input type="email" name="email" onChange={setValue} value={formData.email} className="form-control" />
                                      {errors.email && <div className="text-danger">{errors.email}</div>}
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                      <label>Subject</label>
                                      <input type="text" name="subject" onChange={setValue} value={formData.subject} className="form-control" />
                                      {errors.subject && <div className="text-danger">{errors.subject}</div>}
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                      <label>Message</label>
                                      <textarea rows={6} name="message" onChange={setValue} value={formData.message} className="form-control" ></textarea>
                                      {errors.message && <div className="text-danger">{errors.message}</div>}
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div class="d-flex justify-content-center mt-2">
                                        <button disabled={loader} className='btn btn-primary spinner' type="submit" >
                                        {/* <button  className='btn btn-primary spinner' type="submit" > */}



                                           <div class={`spinner-border text-secondary ${loader ? 'show' : ''}`} role="status">
                                              <span class="visually-hidden">Loading...</span>
                                            </div>
                                            <span class="top">Submit</span>
                                            <span class="bottom">Submit</span>
                                        </button>
                                    </div>
                                </Col>
                            </Row>

                        </form>
                    </div>
                </Col>

            </Row>
                                  <ToastContainer />
        </>
    )
}
