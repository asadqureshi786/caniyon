import Container from 'react-bootstrap/Container';


// images
import Logo from "../assets/img/logo.png"

export default function Header() {
    return (
        <>
            <Container>
                <div className="header">
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


