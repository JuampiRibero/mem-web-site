import Card from "react-bootstrap/Card";

const ServiceCard = ({ service }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <div>{service.logo}</div>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
