import Container from 'react-bootstrap/Container';


// images
import Logo from "../assets/img/logo.png"

import React, { useEffect, useState } from 'react';


export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <>
            <Container>
                <div className={`header ${scrolled ? 'active' : ''}`}>
                    <a href="#" className='logo' >
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="" className="menu_item">About</a>
                            </li>
                            <li>
                                <a href="" className="menu_item">Servie</a>
                            </li>
                            <li>
                                <a href="" className="menu_item">Work</a>
                            </li>
                            <li>
                                <a href="" className="menu_item">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}


