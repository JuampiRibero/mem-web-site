import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceCardList = ({ services }) => {
  return (
    <>
      {services.map((service) => (
        <ServiceCard key={service.name} service={service} />
      ))}
    </>
  );
};

export default ServiceCardList;
