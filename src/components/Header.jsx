import Container from 'react-bootstrap/Container';
import { IoMenuOutline } from "react-icons/io5";




// images
import Logo from "../assets/img/logo.png"
import sm_Logo from "../assets/img/sm_logo.png"

import React, { useEffect, useState } from 'react';


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [slideMenu,setSlideMenu] = useState(false)
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

    

    if (scrolledToBottom) {
      setSlideMenu(true);
      console.log('agaya');  // ✅ Will fire on bottom scroll
    }
    else{
      setSlideMenu(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  // window.addEventListener("scroll", scrolledToBottom);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



    return (
        <>
            <Container>
                <div className={`header ${scrolled ? 'active' : 'top_animation'} ${slideMenu ? 'hideActive' : ''} `}>
                    <a href="#" className='logo' >
                        <img src={Logo} className='lg_logo' alt="Logo" />
                        <img src={sm_Logo} className='sm_logo' alt="" />
                    </a>
                    <div className='mobile_toggle' onClick={() => setShowMenu(!showMenu)} >
                        {
                           showMenu ? <span style={{fontSize : '24px'}}  >X</span> : <IoMenuOutline />
                        }
                    </div>
                    <div className={`menu ${showMenu ? 'showMenu' : ''}`}>
                        <ul>
                            <li>
                                <a href="#aboutUs" className="menu_item">About</a>
                            </li>
                            <li>
                                <a href="#services" className="menu_item">Service</a>
                            </li>
                            <li>
                                <a href="#protfolio" className="menu_item">Work</a>
                            </li>
                            <li>
                                <a href="#contact" className="menu_item">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}


