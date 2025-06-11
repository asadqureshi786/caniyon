import Container from 'react-bootstrap/Container';
import { IoMenuOutline } from "react-icons/io5";


// images
import Logo from "../assets/img/logo.png"

import React, { useEffect, useState } from 'react';


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

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
                    <div className='mobile_toggle' onClick={()=>setShowMenu(!showMenu)} >
                        <IoMenuOutline/>
                    </div>
                    <div className={`menu ${showMenu ? 'showMenu' : '' }`}>
                        <ul>
                            <li>
                                <a href="" className="menu_item">About</a>
                            </li>
                            <li>
                                <a href="" className="menu_item">Service</a>
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


