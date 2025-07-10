import React from 'react'
import { PiWarningCircleLight , PiCaretDownLight} from "react-icons/pi";
import { Row, Col, Accordion } from 'react-bootstrap'
import { BsQuestionCircle } from "react-icons/bs";


export default function Faq() {
    return (
        <>
            <div className="faq maxWith  pb-1 mt-5 pt-5 mb-4" id="faq" data-aos="fade-up" >
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >FAQs</span>
                    </div>
                    <p className="bigT white my-2">Baffled? We'll <span className="sm_unique" >assist!</span></p>
                    <p className="text white subText">
                        This is a compilation of common inquiries about our offerings, crafted to aid you in your purchasing decisions.
                    </p>
                </div>
            </div>

            <div className="faq_list" data-aos="fade-up" >
               <Row className='justify-content-center' >
                <Col md={7} >
                    <div className="border_line">
                         <Row className='gap-2' >
                    <Col md={12}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='d-flex align-items-center justify-content-between' >
                                    <div className='d-flex align-items-center justify-content-between gap-2' >
                                          <BsQuestionCircle/>
                                    Accordion Item #1
                                    </div>
                                    <span className="icon">
                                        <PiCaretDownLight/>
                                    </span>
                                    </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={12}>
                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='d-flex align-items-center justify-content-between' >
                                    <div className='d-flex align-items-center justify-content-between gap-2' >
                                          <BsQuestionCircle/>
                                    Accordion Item #1
                                    </div>
                                    <span className="icon">
                                        <PiCaretDownLight/>
                                    </span>
                                    </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={12}>
                        <Accordion>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='d-flex align-items-center justify-content-between' >
                                    <div className='d-flex align-items-center justify-content-between gap-2' >
                                          <BsQuestionCircle/>
                                    Accordion Item #1
                                    </div>
                                    <span className="icon">
                                        <PiCaretDownLight/>
                                    </span>
                                    </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                    </div>
                </Col>
               </Row>
            </div>
        </>
    )
}
