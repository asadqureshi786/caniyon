import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';

// images
import cover from '../assets/img/banner.jpg'

export default function Banner() {
    const [anime,setAnime] = useState(false);
    useEffect(()=>{
        const handleAnime = ()=>{
            if(scrollY > 10){
                setAnime(true)
                console.log("yes")
            }else{
                setAnime(false)
                console.log("Not")
            }
        }
        window.addEventListener("scroll", handleAnime);
    },[])
    return (
        <>
         <div className={`topBar  ${anime ? 'active' : ''}`}>
             <Header />
            <div className={ ` banner_section text-center `}  >
                <Container >
                    <Row className='justify-content-center sticky_section' >
                        <Col md={8}>
                            <div className="bigB">
                                <p className="main_txt bigT white"><span className="primaryCol">Innovative</span> Design</p>
                                <p className="main_txt white bigT">for Your <span className="primaryCol unique"><span className="underline-svg"></span>Business!</span></p>
                            </div>
                            <p className="desc subText mt-3" >Top-tier design solutions for tech firms and emerging businesses. Ditch the typical aesthetic methods and<br></br> embrace efficiency and originality. Coming soon.</p>
                            <Button className='mt-2' >Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
         </div>
        </>
    )
}