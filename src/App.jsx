// import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Offers from "./components/Offers.jsx";
import Featues from "./components/Featues.jsx";
import Teams from "./components/Teams.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Process from "./components/Process.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";
import AnimatedCursor from "react-animated-cursor";
import { GoArrowUp } from "react-icons/go";
import { useEffect, useState } from "react";
import AOS from 'aos';

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const scrollBar = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollBar);

    return () => {
      window.removeEventListener("scroll", scrollBar);
    };
  }, []); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
    });
       setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <>

      <div className="main_home_page">
        <AnimatedCursor
          innerSize={10}
          outerSize={30}
          color="0, 150, 255"
          outerAlpha={0.4}
          innerScale={1}
          outerScale={1.5}
          outerStyle={{
            border: '2px solid rgba(255, 255, 255, 0.8)',
            backgroundColor: 'transparent',
          }}
          innerStyle={{
            backgroundColor: 'rgb(255, 255, 255)',
          }}
        />
          <Banner />
          <div className="upper_layer">
            <Container>
              <AboutUs  />
              <Featues/>
              <Portfolio/>
              <Services/>
              <Offers />
              <Teams/>
              <div className="onTop">
              <Contact className="onTop" />
              <Faq className="onTop" />
              <Process className="onTop" />
              </div>
            </Container>
              <Footer/>
          </div>

          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`scrollUp ${ !scroll ? 'hideScroll' : ''}`}>
            <GoArrowUp/>
          </div>

      </div>
    </>
  )
}

export default App
