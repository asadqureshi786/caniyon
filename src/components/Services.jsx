import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import { SiCircleci } from "react-icons/si";
import { BsSoundwave } from "react-icons/bs";
import { MdOutlineWifiTethering } from "react-icons/md";
import { TbSquareRoundedLetterN } from "react-icons/tb";
import { PiShapes } from "react-icons/pi";
import { IoCreateOutline } from "react-icons/io5";





import {Row,Col} from  'react-bootstrap'

export default function Services() {

    let sItem = [
        {
            count : '02',
            title : 'DIGITAL MARKETING',
            text : 'Expand your reach and grow your business with our comprehensive digital marketing services. From SEO and PPC to content marketing and social media management, we tailor strategies to your unique needs. Prices start from 1500€.',
            icon : <SiCircleci/>,
        },
        {
            count : '04',
            title : 'E-COMMERCE SOLUTIONS',
            text : 'Optimize your online store with our tailored e-commerce solutions. We offer everything from Shopify setup to advanced customizations and integrations, ensuring a smooth shopping experience for your customers. Prices start from 2500€.',
            icon : <BsSoundwave/>,
        },
        {
            count : '01',
            title : 'CONSULTING & STRATEGY',
            text : 'Gain insights and direction with our expert consulting services. We provide strategic advice on branding, marketing, and digital transformation to help you navigate and thrive in the competitive landscape. Prices start from 2000€.',
            icon : <MdOutlineWifiTethering/>,
        },
        {
            count : '07',
            title : 'EMAIL MARKETING',
            text : 'Boost your conversions with targeted email marketing campaigns. We design, write, and manage campaigns that engage your audience, drive traffic, and increase sales. Prices start from 1200€.',
            icon : <TbSquareRoundedLetterN/>,
        },
        {
            count : '09',
            title : 'UX/UI DESIGN',
            text : 'Enhance your customer experience with intuitive and engaging UX/UI design. We create user-friendly interfaces and seamless interactions that keep your customers coming back. Prices start from 1800€.',
            icon : <PiShapes/>,
        },
        {
            count : '09',
            title : 'CONTENT CREATION',
            text : 'Engage and captivate your audience with high-quality content. Our services include blog posts, videos, graphics, and more, all crafted to boost your brand’s visibility and impact. Prices start from 1000€.',
            icon : <IoCreateOutline/>,
        }
    ]

    return (
        <>
         <Row className='pb-1 mt-3 pt-5 mb-4 ' id="services" >
            <Col md={6} className='sticky_section' data-aos="fade-right" >
                   <div className="services_div sticky_section" style={{top:'20px'}} >
                <div className="text-start sticky_section ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >The Services</span>
                    </div>
                    <p className="bigT white my-2">STAY STREAMLINED, <span className="sm_unique" >YES?</span></p>
                    <p className="text white subText pe-5 me-4">
                        From start to finish, our work process is as simple as they come. But the journey is always magic!
                    </p>
                </div>
            </div>
            </Col>
            <Col md={6}>
                <div className="service_list" data-aos="fade-up" >
                    <ul>
                        {
                            sItem.map((item)=>(
                                <li key={item.title} >
                                    <div className="items">
                                        <span className="count primaryCol f20">{item.count}</span>
                                        <h4 className='white fw7 f22 mt-2' >{item.title}</h4>
                                        <p className="lightCol mb-0 f13">{item.text}</p>
                                        <span className='icon'>{item.icon}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Col>
         </Row>
        </>
    )
}
