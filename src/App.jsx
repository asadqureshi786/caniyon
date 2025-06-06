import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import AboutUs from "./components/AboutUs.jsx";
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
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
