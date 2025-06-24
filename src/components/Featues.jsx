import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { CiHeadphones } from "react-icons/ci";
import { Card, Button, Row, Col } from 'react-bootstrap'

export default function Featues() {
    return (
        <>
            <div className="featues maxWith pb-1 mt-0 pt-2" data-aos="fade-up" >
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Included Features</span>
                    </div>
                    <p className="bigT white my-2">EACH STAGE IS <span className="sm_unique" >SEIZED</span>
                    </p>
                    <p className="text white subText">
                        Your revamped store will possess the many impressive attributes and powerful tools that turn spectators into buyers, maintaining an impeccable aesthetic and functionality.
                    </p>
                </div>
            </div>
            <div className="features_card mt-5" data-aos="fade-up" >
                <Row>
                    <Col md={4}>
                        <div className="item">
                            <span className="icon"><CiHeadphones /></span>
                            <h4 className="title">Custom Design</h4>
                            <p className="subText">Unique and tailored designs that reflect your brand’s personality and values.</p>
                            {/* <div className="last_icon">
                                <PiWarningCircleLight />
                            </div> */}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="item">
                            <span className="icon"><CiHeadphones /></span>
                            <h4 className="title">RESPONSIVE LAYOUT</h4>
                            <p className="subText">Ensuring your store looks stunning and functions perfectly on all devices.</p>
                            {/* <div className="last_icon">
                                <PiWarningCircleLight />
                            </div> */}
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="item">
                            <span className="icon"><CiHeadphones /></span>
                            <h4 className="title">SOCIAL MEDIA</h4>
                            <p className="subText">Linking your shop to social media sites to boost your digital visibility.</p>
                            {/* <div className="last_icon">
                                <PiWarningCircleLight />
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
