import React from 'react';
import { PiWarningCircleLight } from "react-icons/pi";
import {Row,Col} from 'react-bootstrap';
import bottom from '../assets/img/bottom.jpg'
            import dropImg from '../assets/img/drop2.png'

export default function Process() {
    return (
        <>
            <div className="position-relative">
                   <div className="process maxWith  pb-1 mt-5 pt-5 mb-4" data-aos="fade-up" >
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >The Process</span>
                    </div>
                    <p className="bigT white my-2">STAY STREAMLINED,<span className="sm_unique" >YES?</span> </p>
                    <p className="text white subText">
                       From start to finish, our work process is as simple as they come. But the journey is always magic!
                    </p>
                </div>
            </div>
            <div className="stay_process mt-4" data-aos="fade-up" >
                <div className="box">
                    <Row>
                        <Col md={6}>
                            <img src={bottom} className='img-fluid' alt="" />
                        </Col>
                        <Col md={6}>
                            <ul className='sideList' >
                                <li>
                                    <h4 className="heading">01. YOU EXTEND, WE OBSERVE</h4>
                                    <p className="subText mt-3">First off, let's familiarize ourselves! We're rigorous in choosing our clients, both personal and corporate. Surely, you might not trust us immediately, and that's what we're here to change! Any transactions during this preliminary stage are free of charge, of course! But please, don't misuse our time!</p>
                                </li>
                                <li>
                                    <h4 className="heading">02. WE DESIGN THE PLAN, YOU SUPPLY THE MEANS</h4>
                                    <p className="subText mt-3">After reaching a mutual agreement, we commence with the strategic planning stage. Your participation is crucial, though it won’t drain much of your time. An upfront payment of 20%, which is non-refundable, is demanded for the layout stage, and upon approval, we stick rigorously to an advance payment process.</p>
                                </li>
                                <li>
                                    <h4 className="heading">03. WE SEAL THE DEAL, YOU RAKE THE CASH</h4>
                                    <p className="subText mt-3">Now, we fulfill the responsibilities you've committed to, ensuring an agreed-upon deadline. We certify that all aspects are impeccable before passing it onto you, engage in discussion about potential future services you may need, and then you can proceed to expand your business.</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
              <img src={dropImg} className='img-fluid three drag_img'   alt="" />
            </div>
        </>
    )
}
