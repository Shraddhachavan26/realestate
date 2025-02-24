import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import flat4 from "../Images/flat1.jpg";
import flat3 from "../Images/Flat2.jpg";
import flat2 from "../Images/flat3.jpeg";
import flat1 from "../Images/flat4.png";

// Additional images
import flat1_1 from "../Images/1rkK.jpg";
import flat1_2 from "../Images/1rkR.jpg";

import kitchen2 from "../Images/kitchen2.jpeg";
import bedroom2 from "../Images/Flatbedroom2.jpeg";
import bath2 from "../Images/bath2.jpeg";
import gallery2 from "../Images/gallery.jpeg";

import kitchen3 from "../Images/kitchen3.jpeg";
import bedroom3 from "../Images/Flatbedroom3.jpeg";
import bath3 from "../Images/bath3.jpeg";
import gallery3 from "../Images/gallery.jpeg";

import kitchen4 from "../Images/kitchen4.jpeg";
import bedroom4 from "../Images/Flatbedroom4.jpeg";
import bath4 from "../Images/bath4.jpeg";
import gallery4 from "../Images/gallery.jpeg";

const flats = [
  {
    id: 1,
    name: "Luxury Apartment",
    location: "Karad",
    price: "₹50 Lakh",
    image: flat1,
    images: [flat1_1, flat1_2],
  },
  {
    id: 2,
    name: "Modern Flat",
    location: "Satara",
    price: "₹40 Lakh",
    image: flat2,
    images: [flat2, kitchen2, bedroom2, bath2, gallery2],
  },
  {
    id: 3,
    name: "2BHK Cozy Flat",
    location: "Pune",
    price: "₹35 Lakh",
    image: flat3,
    images: [flat3, kitchen3, bedroom3, bath3, gallery3],
  },
  {
    id: 4,
    name: "Spacious Penthouse",
    location: "Mumbai",
    price: "₹75 Lakh",
    image: flat4,
    images: [flat4, kitchen4, bedroom4, bath4, gallery4],
  },
];

const Flats = () => {
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop: "100px" }}>
      <Navbar />
      <Container className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Available Flats</h2>
        <div className="flats-container">
          <Row className="d-flex flex-row flex-nowrap overflow-auto">
            {flats.map((flat) => (
              <Col key={flat.id} md={3} sm={6} xs={12} className="mb-4">
                <Card className="flat-card shadow-lg">
                  <Card.Img variant="top" src={flat.image} alt={flat.name} />
                  <Card.Body>
                    <Card.Title className="card-title">{flat.name}</Card.Title>
                    <Card.Text className="card-text">
                      <strong>Location:</strong> {flat.location} <br />
                      <strong>Price:</strong> {flat.price}
                    </Card.Text>
                    <Button className="view-details-btn" onClick={() => setSelectedFlat(flat)}>
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />

      {/* Modal for Viewing More Images */}
      {selectedFlat && (
        <Modal show={!!selectedFlat} onHide={() => setSelectedFlat(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedFlat.name} - More Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {selectedFlat.images.map((img, index) => (
                <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                  <img
                    src={img}
                    alt={`Flat ${index}`}
                    className="img-fluid rounded shadow-sm"
                    onClick={() => setSelectedImage(img)}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              ))}
            </Row>
          </Modal.Body>
        </Modal>
      )}

      {/* Modal for Viewing Large Image */}
      {selectedImage && (
        <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered>
          <Modal.Body className="text-center">
            <img src={selectedImage} alt="Selected" className="img-fluid rounded shadow-lg" />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Flats;
