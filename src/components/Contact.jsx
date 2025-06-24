import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';



export default function Contact() {
    return (
        <>
            <Row className='pb-1 mt-5 pt-5 mb-4 justify-content-center' id="contact" >
                <Col md={6}>
                    <div className="contact_us" data-aos="fade-up" >
                        <div className="text-center">
                            <div className="subHead">
                                <PiWarningCircleLight /><span className='text' >Find Us</span>
                            </div>
                            <p className="bigT white my-2">Let'Get In <span className="sm_unique" >Touch</span> </p>
                            <p className="text white subText">Contact us for more information or assistance.</p>
                        </div>
                    </div>
                       <div className="form_list" data-aos="fade-up" >
                        <form>
                            <Row>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea rows={6} className='form-control' ></textarea>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className='btn btn-primary' >
                                             <span className="top">Submit</span>
                                        <span className="bottom">Submit</span>
                                            </button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            
            </Row>
        </>
    )
}
