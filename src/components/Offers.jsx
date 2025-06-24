import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Offers() {
    let packageList = [
        {
            id: 1,
            name: 'Basic Package',
            subText: 'Logo design, branding basics & social media services.',
            price: '500',
            services: ['Logo design', 'Basic branding', 'Social media templates', 'Business card design', 'Letterhead design', 'Basic website setup (up to 5 pages)']
        },
        {
            id: 2,
            name: 'Standard Package',
            subText: 'Thorough advertising, website design, and branding.',
            price: '1500',
            services: ['Comprehensive branding', 'Website design', 'Marketing materials', 'SEO optimization', 'Email marketing setup', 'Social media management']
        },
        {
            id: 3,
            name: 'Premium Package',
            subText: 'Advanced web dev, full branding & ongoing support.',
            price: '3000',
            services: ['Advanced web development', 'Full-scale branding', 'Ongoing support', 'Custom e-commerce solutions', 'Advanced SEO strategies', 'Content creation (blogs, videos)']
        },
    ]
    return (
        <>
            <div className="offers maxWith mt-5 pt-5 pb-1 pt-2"  data-aos="fade-up" >
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Pricing</span>
                    </div>
                    <p className="bigT white my-2">OUR <span className="sm_unique" >OFFERS</span> </p>
                    <p className="text white subText">
                        We offer a range of inventive solutions tailored to your needs, promising exceptional caliber and value. Our pricing framework is designed to be transparent and affordable, presenting comprehensible packages for all budgets.

                    </p>
                </div>
            </div>
            <div className="package mt-5" data-aos="fade-up" >
                 <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Most Wanted</span>
                    </div>
                <Row>
                    {
                        packageList.map((item) => (
                            <Col key={item.id} md={4}>
                                <Card className='package_card'>
                                    <h5 className='white f20 fw7 title text-uppercase' >{item.name}</h5>
                                    <p className="text lightCol f14 white">{item.subText}</p>
                                    <p className="price f35 white fw7">${item.price}</p>
                                    <ul className="list_item">
                                        {
                                            item.services.map((service)=>(
                                                <li key={service} className="item">
                                                    <span className="icon"><IoIosCheckmarkCircleOutline /></span>
                                                    <span className="text  white">{service}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <Button className='btn_white'>
                                         <span className="top">Let's get started!</span>
                                        <span className="bottom">Let's get started!</span>
                                        </Button>
                                </Card>
                            </Col>
                        ))
                    }
                    
                    <div className="text-center mt-4">
                           <p className="text white subText mb-0 pb-0 ">From start to finish, our work process is as simple as they come. But the journey is always magic!</p>
                           <p className="text white subText  ">From start to finish, our work process is as simple as they come.</p>
                           <a href="#contact" className='btn btn-primary' >
                             <span className="top">Connect</span>
                                        <span className="bottom">Connect</span>
                            </a>
                    </div>

                </Row>
            </div>
        </>
    )
}
