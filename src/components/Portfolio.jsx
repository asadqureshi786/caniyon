import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";

export default function Portfolio() {
    return (
        <>
            <div className="portfolio maxWith  pb-1 mt-5 pt-5">
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Portfolio</span>
                    </div>
                    <p className="bigT white my-2">BEHAVIOR SHOWS WORTH</p>
                    <p className="text white subText">
                        We specialize in transforming businesses into extraordinary brands.
                        We're passionate about continuing our mission. Explore our stellar
                        client roster and the results-driven strategies we're implementing for them.
                    </p>
                </div>
            </div>

            <div className="protfolio_card">
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <div className="sideImage">
                            
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}
