import React from 'react'
import Logo from '../assets/img/logo.png'
import { IoLogoInstagram } from "react-icons/io";
import { PiTwitterLogoLight, PiLinkedinLogo } from "react-icons/pi";


                

import { Container } from 'react-bootstrap'
export default function Footer() {
    return (
        <>
            <div className="footer">
                <Container data-aos="fade-up" >
                    <div className="first">
                        <div className="r_side">
                            <img src={Logo} alt="" />
                            <div className="menu">
                                <a href="#aboutUs" className='link' >About-us</a>
                                <a href="#services" className='link' >pricing</a>
                                <a href="#team" className='link' >Team</a>
                                <a href="#services" className='link' >Services</a>
                                <a href="#protfolio" className='link' >Portfolio</a>
                                <a href="#faq" className='link' >Faq-s</a>
                            </div>
                        </div>
                        <div className="l_side">
                            <div className="box">
                                <div className="top">
                                    <h6 className='white title fw4' >GET IN TOUCH</h6>
                                    <div className="d-flex align-items-center">
                                        <p className='lightCol' >Tel: <span className='lightCol' >+555 867 5309</span></p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h6 className='white title fw4' >FOLLOW US</h6>
                                    <div className="social">
                                        <a href="#" className='link' ><IoLogoInstagram /></a>
                                        <a href="#" className='link' ><PiTwitterLogoLight /></a>
                                        <a href="#" className='link' ><PiLinkedinLogo /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second text-center pt-5 mt-5">
                        <p className="lightCol f14">© 2024 Copyright  <span className="ps-1 primaryCol">CANIYON</span></p>
                    </div>
                </Container>
                          
            </div>
        </>
    )
}
