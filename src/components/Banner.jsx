import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

// images
import cover from '../assets/img/banner.jpg'

export default function Banner() {
    return (
        <>
            <div className="banner_section text-center" style={{ background: `url(${cover})` }} >
                <Container>
                    <Row className='justify-content-center' >
                        <Col md={8}>
                            <div className="bigB">
                                <p className="main_txt bigT white"><span className="primaryCol">Innovative</span> Design</p>
                                <p className="main_txt white bigT">for Your <span className="primaryCol">Business!</span>!</p>
                            </div>
                            <p className="desc subText mt-3" >Top-tier design solutions for tech firms and emerging businesses. Ditch the typical aesthetic methods and<br></br> embrace efficiency and originality. Coming soon.</p>
                            <Button className='mt-2' >Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}