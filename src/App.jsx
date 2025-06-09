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
function App() {

  return (
    <>

      <div className="main_home_page">
      
        <Banner />
        <div className="upper_layer">
          <Container>
            <AboutUs />
            <Offers />
            <Featues/>
            <Teams/>
            <Services/>
            <Portfolio/>
            <div className="onTop">
              <Contact className="onTop" />
            <Faq className="onTop" />
            <Process className="onTop" />
            </div>
          </Container>
            <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
