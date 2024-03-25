import { useEffect, useState } from "react";
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
// import "./CardListContainer.scss";

const ServicesList = [
  {
    logo: <FontAwesomeIcon icon={faPeopleGroup} className="icon" />,
    name: "Gestión del Cambio",
    description: "Facilitamos la transformación de nuestros clientes",
  },
  {
    logo: <FontAwesomeIcon icon={faRocket} className="icon" />,
    name: "Agilidad",
    description:
      "Co creamos un mindset sostenido en metodologías y prácticas ágiles",
  },
  {
    logo: <FontAwesomeIcon icon={faLightbulb} className="icon" />,
    name: "Innovación",
    description:
      "Espacios experimentales para convertir problemas en oportunidades",
  },
  {
    logo: <FontAwesomeIcon icon={faFlaskVial} className="icon" />,
    name: "Labs",
    description: "Workshops y trainings en competencias",
  },
  {
    logo: <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />,
    name: "Diagnósticos",
    description:
      "Investigamos y relevamos la realidad presente de cada organización",
  },
  {
    logo: <FontAwesomeIcon icon={faComments} className="icon" />,
    name: "Coaching",
    description:
      "Ontológico, Ejecutivo, Sistémico. Individual y de Equipos. Eneagrama",
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
    <div className="body container"  id={"services"}>
      <div className="row my-5">
        <ServiceCardList services={services} />
      </div>
    </div>
  );
};

export default ServiceCardListContainer;
