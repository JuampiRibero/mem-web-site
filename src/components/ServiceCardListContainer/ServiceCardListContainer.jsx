import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ServiceCardList from "../ServiceCardList/ServiceCardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFlaskVial,
  faLightbulb,
  faMagnifyingGlass,
  faPeopleGroup,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import "./ServiceCardListContainer.css";

const ServicesList = [
  {
    logo: <FontAwesomeIcon icon={faPeopleGroup} className="icon" />,
    name: "Lorem ipsum 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus quo perspiciatis, dicta id modi neque voluptatibus soluta repudiandae officiis voluptatum optio voluptate animi porro aspernatur voluptates magni sequi.",
  },
  {
    logo: <FontAwesomeIcon icon={faRocket} className="icon" />,
    name: "Lorem ipsum 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus quo perspiciatis, dicta id modi neque voluptatibus soluta repudiandae officiis voluptatum optio voluptate animi porro aspernatur voluptates magni sequi.",
  },
  {
    logo: <FontAwesomeIcon icon={faLightbulb} className="icon" />,
    name: "Lorem ipsum 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus quo perspiciatis, dicta id modi neque voluptatibus soluta repudiandae officiis voluptatum optio voluptate animi porro aspernatur voluptates magni sequi.",
  },
  {
    logo: <FontAwesomeIcon icon={faFlaskVial} className="icon" />,
    name: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus quo perspiciatis, dicta id modi neque voluptatibus soluta repudiandae officiis voluptatum optio voluptate animi porro aspernatur voluptates magni sequi.",
  },
  {
    logo: <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />,
    name: "Lorem ipsum 5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus quo perspiciatis, dicta id modi neque voluptatibus soluta repudiandae officiis voluptatum optio voluptate animi porro aspernatur voluptates magni sequi.",
  },
  {
    logo: <FontAwesomeIcon icon={faComments} className="icon" />,
    name: "Lorem ipsum 6",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, delectus quo perspiciatis, dicta id modi neque voluptatibus soluta repudiandae officiis voluptatum optio voluptate animi porro aspernatur voluptates magni sequi.",
  },
];

const ServiceCardListContainer = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = new Promise((res) => {
      setTimeout(() => {
        res(ServicesList);
      }, 2000);
    });

    getServices.then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <Container id={"services"}>
      <h1 className="mt-5 mb-3">Servicios</h1>
      <h5 className="mb-5">El cuidado de tu familia en las mejores manos.</h5>
      <div className="my-5 contenedor cards">
        <ServiceCardList services={services} />
      </div>
    </Container>
  );
};

export default ServiceCardListContainer;
