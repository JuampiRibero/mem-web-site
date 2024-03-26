import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id={"home"}>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/pLfW8SX/ancianos-sentados-sofa-amarillo-con-enfermera.jpg"
          alt="Ancianos sentados en sofa amarillo con enfermera"
          title="Ancianos sentados en sofa amarillo con enfermera"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/nLpVyjS/medico-controlando-la-presi-n-arterial-paciente.jpg"
          alt="Medico controlando la presion arterial paciente"
          title="Medico controlando la presion arterial paciente"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/GF2Qypv/anciana-siendo-alimentada.jpg"
          alt="Anciana siendo alimentada"
          title="Anciana siendo alimentada"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
