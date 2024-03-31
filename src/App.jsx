import ScrollToTop from "react-scroll-to-top";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <ScrollToTop smooth top={500} />
      <Footer />
    </>
  );
};

export default App;
