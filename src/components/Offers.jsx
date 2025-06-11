import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { PiWarningCircleLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Offers() {
    let packageList = [
        {
            id: 1,
            name: 'Basic Package',
            subText: 'Logo design, branding basics & social media.',
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
            id: 2,
            name: 'Premium Package',
            subText: 'Advanced web dev, full branding & ongoing support.',
            price: '3000',
            services: ['Advanced web development', 'Full-scale branding', 'Ongoing support', 'Custom e-commerce solutions', 'Advanced SEO strategies', 'Content creation (blogs, videos)']
        },
    ]
    return (
        <>
            <div className="offers maxWith pb-1 pt-2">
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Services Pricing</span>
                    </div>
                    <p className="bigT white my-2">OUR <span class="sm_unique" >OFFERS</span> </p>
                    <p className="text white subText">
                        We offer a range of inventive solutions tailored to your needs, promising exceptional caliber and value. Our pricing framework is designed to be transparent and affordable, presenting comprehensible packages for all budgets.

                    </p>
                </div>
            </div>
            <div className="package mt-5">
                 <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >Most Wanted</span>
                    </div>
                <Row>
                    {
                        packageList.map((item) => (
                            <Col md={4}>
                                <Card className='package_card'>
                                    <h5 className='white f20 fw7 title text-uppercase' >{item.name}</h5>
                                    <p className="text lightCol f14 white">{item.subText}</p>
                                    <p className="price f35 white fw7">${item.price}</p>
                                    <ul className="list_item">
                                        {
                                            item.services.map((service)=>(
                                                <li className="item">
                                                    <span className="icon"><IoIosCheckmarkCircleOutline /></span>
                                                    <span className="text  white">{service}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <Button className='btn_white'>Let's get started!</Button>
                                </Card>
                            </Col>
                        ))
                    }

                </Row>
            </div>
        </>
    )
}
