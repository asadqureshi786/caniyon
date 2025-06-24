import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

import Header from './Header.jsx';

// Images
import cover from '../assets/img/banner.jpg';
import drop1 from '../assets/img/drop1.png';
import drop2 from '../assets/img/drop3.png';

export default function Banner() {
    const [anime, setAnime] = useState(false);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            disable: false // Ensures it works on mobile
        });

        // Refresh on scroll and resize (helpful for mobile)
        const handleScroll = () => {
            AOS.refresh();

            if (window.scrollY > 10) {
                setAnime(true);
            } else {
                setAnime(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", AOS.refresh);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", AOS.refresh);
        };
    }, []);

    return (
        <>
            <div className={`topBar ${anime ? 'active' : ''}`}>
                <div className="banner_img" style={{ backgroundImage: `url(${cover})` }}></div>
                <Header />

                <div className="banner_section text-center">
                    <Container>
                        <Row className={`justify-content-center sticky_section banner_section_style ${anime ? 'secction_blur' : ''}`}>
                            <Col md={8}>
                                <div className="bigB" data-aos="zoom-in">
                                    <p className="main_txt bigT white">
                                        <span className="primaryCol">Innovative</span> Design
                                    </p>
                                    <p className="main_txt white bigT">
                                        for Your <span className="primaryCol unique">
                                            <span className="underline-svg"></span>Business!
                                        </span>
                                    </p>
                                </div>
                                <p className="desc subText mt-3">
                                    Top-tier design solutions for tech firms and emerging businesses. Ditch the typical aesthetic methods and<br />
                                    embrace efficiency and originality. Coming soon.
                                </p>
                                <a href="#contact" className="btn btn-primary mt-2">
                                    <span className="top">Connect</span>
                                    <span className="bottom">Connect</span>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <img src={drop1} className="img-fluid one drag_img" alt="Decorative Drop 1" />
                <img src={drop2} className="img-fluid two drag_img" alt="Decorative Drop 2" />
            </div>
        </>
    );
}
