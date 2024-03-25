import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer mt-5">
        <Col>
          <div className="text-center">
            <img
              src="https://i.ibb.co/NrHKKV7/logo-footer.png"
              className="footer-logo"
              alt="Logo MEM"
              title="MEM"
              loading="lazy"
            />
          </div>
          <div className="d-flex justify-content-center pt-3">
            <ul className="col-md-3 col-sm-1 d-flex justify-content-between list-unstyled mb-0">
              <Link to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </ul>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2024 Lic. María Eugenia Mazzoni. Todos los derechos reservados.
          </div>
        </Col>
      </Container>
    </>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <>
//       <footer className="page-footer font-small blue pt-4">
//         <div className="container-fluid text-center text-md-left">
//             <div >
//                 <div>
//                     <h5 className="text-uppercase">LOGO</h5>
//                 </div>
//                 <div className="row">
//                     <ul className="col">
//                         <li className="col-md-12 mb-md-0 mb-3"><a href="#!">Link 1</a></li>
//                         <li className="col-md-12 mb-md-0 mb-3"><a href="#!">Link 2</a></li>
//                         <li className="col-md-12 mb-md-0 mb-3"><a href="#!">Link 3</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="footer-copyright text-center py-3">© 2020 Copyright:
//             <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer
