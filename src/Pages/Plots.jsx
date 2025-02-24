import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import plot1 from "../Images/plot1.jpeg";
import plot2 from "../Images/plot2.jpeg";
import plot3 from "../Images/plot3.jpeg";
import plot4 from "../Images/plot4.jpeg";

const plots = [
  {
    id: 1,
    location: "Pune",
    owner: "Mr. Sharma",
    price: "₹30 Lakh",
    area: "2000 sq.ft",
    contact: "+91 98765 43210",
    image: plot1,
  },
  {
    id: 2,
    location: "Mumbai",
    owner: "Mrs. Verma",
    price: "₹50 Lakh",
    area: "2500 sq.ft",
    contact: "+91 87654 32109",
    image: plot2,
  },
  {
    id: 3,
    location: "Nagpur",
    owner: "Mr. Patil",
    price: "₹25 Lakh",
    area: "1800 sq.ft",
    contact: "+91 76543 21098",
    image: plot3,
  },
  {
    id: 4,
    location: "Satara",
    owner: "Mr. Deshmukh",
    price: "₹20 Lakh",
    area: "1500 sq.ft",
    contact: "+91 65432 10987",
    image: plot4,
  },
];

const Plots = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop: "100px" }}>
      <Navbar />
      <Container className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Available Plots</h2>
        <Row className="d-flex justify-content-center">
          {plots.map((plot) => (
            <Col key={plot.id} md={3} sm={6} xs={12} className="mb-4">
              <Card className="shadow-lg">
                <Card.Img variant="top" src={plot.image} alt={`Plot in ${plot.location}`} />
                <Card.Body>
                  <Card.Title>Location: {plot.location}</Card.Title>
                  <Card.Text>
                    <strong>Owner:</strong> {plot.owner} <br />
                    <strong>Price:</strong> {plot.price} <br />
                    <strong>Area:</strong> {plot.area} <br />
                    <strong>Contact:</strong> {plot.contact}
                  </Card.Text>
                  <Button variant="primary" onClick={() => setSelectedPlot(plot)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />

      {selectedPlot && (
        <Modal show={!!selectedPlot} onHide={() => setSelectedPlot(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Plot Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPlot.image} alt="Selected Plot" className="img-fluid rounded shadow-lg" />
            <h5 className="mt-3">Location: {selectedPlot.location}</h5>
            <p><strong>Owner:</strong> {selectedPlot.owner}</p>
            <p><strong>Price:</strong> {selectedPlot.price}</p>
            <p><strong>Area:</strong> {selectedPlot.area}</p>
            <p><strong>Contact:</strong> {selectedPlot.contact}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Plots;
