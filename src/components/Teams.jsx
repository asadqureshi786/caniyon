import React from 'react'
import { PiWarningCircleLight } from "react-icons/pi";
import User1 from '../assets/img/user1.jpg'
import User2 from '../assets/img/user2.png'
import { Row, Col } from 'react-bootstrap'

export default function Teams() {
    let teams = [
        {
            img: User1,
            name: 'Liam Noah',
            desig: 'Creative Director'
        },
        {
            img: User2,
            name: 'Jule Wakon',
            desig: 'Web Designer'
        },
        {
            img: User1,
            name: 'William James',
            desig: 'Graphic Designer'
        },
        {
            img: User2,
            name: 'Olivia Sophia',
            desig: 'Marketing Specialist'
        }
    ]
    return (
        <>
            <div className="offers maxWith  pb-1 mt-5 pt-5" id="team" data-aos="fade-up" >
                <div className="text-center ">
                    <div className="subHead">
                        <PiWarningCircleLight /><span className='text' >The Team</span>
                    </div>
                    <p className="bigT white my-2">SIGNIFICANT <span className="sm_unique" >ICONS</span></p>
                    <p className="text white subText">
                        Like magnets, alike intellects mysteriously guide themselves towards one another. Our team, brimming with confidence and satisfaction, proudly presents itself as truly exceptional. Each team member boasts unique talents and skills, ensuring through mutual cooperation, we can guarantee unrivaled speed in delivering fast, superior services.
                    </p>
                </div>
            </div>

            <div className="all_teams mt-4 pt-2" data-aos="fade-up" >
                <Row>
                    {
                        teams.map((item) => (
                            <Col key={item.name} md={3}>
                                <div className="box">
                                    <img src={item.img} className='img-fluid' ></img>
                                    <div className="info">
                                        <h4 className="name white">{item.name}</h4>
                                        <p className="designation lightCol">{item.desig}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>

        </>
    )
}
