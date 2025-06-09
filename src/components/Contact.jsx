import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';

export default function Contact() {
    return (
        <>
            <Row className='pb-1 mt-5 pt-5 mb-4' >
                <Col md={6}>
                    <div className="contact_us">
                        <div className="text-left">
                            <div className="subHead">
                                <PiWarningCircleLight /><span className='text' >Find Us</span>
                            </div>
                            <p className="bigT white my-2">Let'Get In <span class="sm_unique" >Touch</span> </p>
                            <p className="text white subText">Contact us for more information or assistance.</p>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div class="form_list">
                        <form>
                            <Row>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" class="form-control" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className='form-control' ></textarea>
                                    </div>
                                    <label>Message</label>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
