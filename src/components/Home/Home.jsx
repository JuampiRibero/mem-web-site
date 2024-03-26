import Carousel from "../Carousel/Carousel"
import About from "../About/About";
import ServiceCardListContainer from "../ServiceCardListContainer/ServiceCardListContainer";
import Contact from "../Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <ServiceCardListContainer />
      <Contact />
    </>
  );
};

export default Home;
