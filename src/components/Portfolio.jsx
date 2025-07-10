import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { Row, Col } from 'react-bootstrap'

// Images
import global from '../assets/img/global.jpg'
import pixcel from '../assets/img/pixcel.jpg'
import urban from '../assets/img/urban.jpg'

export default function Portfolio() {
    let portfolio = [
        {
            heading: 'GLOBAL CONNECT',
            text: 'Global Connect, an international logistics firm, needed a digital transformation. We created an intuitive website with real-time tracking features, developed a mobile app for customer convenience, and launched a targeted email marketing campaign to enhance their customer engagement.',
            service: 'Web Development, Mobile App Development, Email Marketing.',
            img: global,
        },
        {
            heading: 'PIXEL STUDIO',
            text: 'Pixel Studio, a renowned creative agency, wanted a complete overhaul of their brand identity. We delivered a vibrant new logo, a cohesive brand strategy, and an engaging website that showcases their portfolio and services seamlessly.',
            service: 'Branding & Identity, Web Design, UX/UI Design.',
            img: pixcel,
        },
        {
            heading: 'URBAN GREEN',
            text: 'Urban Green is a leading sustainable urban farming company. We revamped their digital presence with a modern, eco-friendly website, developed an online marketplace, and provided comprehensive digital marketing strategies to boost their online visibility.',
            service: 'Website Development, E-Commerce Solutions, Digital Marketing.',
            img: urban,
        }
    ]
    return (
        <>
            <div className="portfolio maxWith  pb-1 mt-5 pt-5 mb-4" id="protfolio" data-aos="fade-up" >
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Portfolio</span>
                    </div>
                    <p className="bigT white my-2">BEHAVIOR SHOWS <span className="sm_unique" >WORTH</span> </p>
                    <p className="text white subText">
                        We specialize in transforming businesses into extraordinary brands.
                        We're passionate about continuing our mission. Explore our stellar
                        client roster and the results-driven strategies we're implementing for them.
                    </p>
                </div>
            </div>
            <div className="protfolio_gap">
                  {
                portfolio.map((item) => (
                    <div key={item.heading} className="protfolio_card sticky_section" data-aos="fade-up" >
                        <Row className='align-items-center p-5' >
                            <Col md={6}>
                                <div className="content sticky_section">
                                    <h4 className="title white f30 fw7" >{item.heading}</h4>
                                    <p className="subText mt-4">{item.text}</p>
                                    <div className="d-flex gap-1 pt-2 pb-2 align-align-items-center">
                                        <p className='subText'>Our Services:</p>
                                        <p className='primaryCol'>{item.service}</p>
                                    </div>
                                    <a href="#contact" className='btn btn-primary bigB' >
                                        
                                             <span className="top">Check it out!</span>
                                <span className="bottom">Check it out!</span>
                                        </a>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="sideImage">
                                    <img src={item.img} className='grayScale img-fluid' ></img>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))
            }
            </div>
        </>
    )
}
