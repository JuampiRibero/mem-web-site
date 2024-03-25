import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ServiceCard = ({ service }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div>{service.logo}</div>
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
