import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Offers from "./components/Offers.jsx";
import Featues from "./components/Featues.jsx";
import Teams from "./components/Teams.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { Container } from "react-bootstrap";
function App() {

  return (
    <>

      <div className="main_home_page">
        <Header />
        <Banner />
        <div className="upper_layer">
          <Container>
            <AboutUs />
            <Offers />
            <Featues/>
            <Teams/>
            <Portfolio/>
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
