import { Col, Container, Row } from "react-bootstrap";
import ServiceCardListContainer from "../ServiceCardListContainer/ServiceCardListContainer";
import "./Home.css";

const Home = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="head_left">
              <div className="w-75 mt-2">
                <h1>Lorem ipsum dolor</h1>
              </div>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
                delectus quo perspiciatis, dicta id modi neque voluptatibus
                soluta repudiandae officiis voluptatum optio voluptate animi
                porro aspernatur voluptates magni sequi. Iure? Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Nulla, molestias
                architecto sit cumque numquam voluptatum enim, deserunt dicta ab
                accusantium tenetur. Vitae nam ipsum quia, quod voluptate optio
                iure consectetur! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Similique minus incidunt architecto delectus
                sequi vero facere repellendus magnam!
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center shadow-sm rounded">
              <img
                src="https://i.ibb.co/hV6gfGG/retrato-doctora-mujer.jpg"
                alt="Foto Doctora Mujer"
                className="image"
              />
            </div>
          </Col>
        </Row>
        {/* <div className="headerFoot my-4">
          <HeaderFoot />
        </div> */}
        <ServiceCardListContainer/>
      </Container>
    </div>
  );
};

export default Home;
