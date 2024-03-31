import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="mt-5" id={"about-me"}>
      <Row>
        <Col md={6}>
          <div className="head-left">
            <div className="w-75 mt-2">
              <h1>Lic. María Eugenia Mazzoni</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              delectus quo perspiciatis, dicta id modi neque voluptatibus soluta
              repudiandae officiis voluptatum optio voluptate animi porro
              aspernatur voluptates magni sequi. Iure? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Nulla, molestias architecto sit
              cumque numquam voluptatum enim, deserunt dicta ab accusantium
              tenetur. Vitae nam ipsum quia, quod voluptate optio iure
              consectetur! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Similique minus incidunt architecto delectus sequi vero
              facere repellendus magnam!
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="head-right d-flex justify-content-center align-items-center">
            <img
              src="https://i.ibb.co/qR3Ts0L/retrato-doctora-mujer.jpg"
              alt="Foto Doctora Mujer"
              title="Foto Doctora Mujer"
              loading="lazy"
              className="image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
