import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import rowHouse1 from "../Images/RH1.png";
import rowHouse2 from "../Images/RH2.png";
import rowHouse3 from "../Images/RH3.png";
import rowHouse4 from "../Images/home2.png";

// Additional images
import rowHouse1_1 from "../Images/Kitchen1.jpeg";
import rowHouse1_2 from "../Images/Flatbedroom1.jpeg";
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

const rowHouses = [
  {
    id: 1,
    name: "Elegant Row House",
    location: "Karad",
    price: "₹60 Lakh",
    image: rowHouse1,
    images: [rowHouse1_1, rowHouse1_2],
  },
  {
    id: 2,
    name: "Modern Townhouse",
    location: "Satara",
    price: "₹55 Lakh",
    image: rowHouse2,
    images: [rowHouse2, kitchen2, bedroom2, bath2, gallery2],
  },
  {
    id: 3,
    name: "Luxury Duplex",
    location: "Karad",
    price: "₹75 Lakh",
    image: rowHouse3,
    images: [rowHouse3, kitchen3, bedroom3, bath3, gallery3],
  },
  {
    id: 4,
    name: "Spacious Bungalow",
    location: "Mundhe",
    price: "₹90 Lakh",
    image: rowHouse4,
    images: [rowHouse4, kitchen4, bedroom4, bath4, gallery4],
  },
];

const RowHouses = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={styles.page}>
      <Navbar />
      <Container className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Available Row Houses</h2>
        <div className="row-houses-container">
          <Row className="d-flex flex-row flex-nowrap overflow-auto">
            {rowHouses.map((house) => (
              <Col key={house.id} md={3} sm={6} xs={12} className="mb-4">
                <Card className="row-house-card shadow-lg">
                  <Card.Img variant="top" src={house.image} alt={house.name} />
                  <Card.Body>
                    <Card.Title className="card-title">{house.name}</Card.Title>
                    <Card.Text className="card-text">
                      <strong>Location:</strong> {house.location} <br />
                      <strong>Price:</strong> {house.price}
                    </Card.Text>
                    <Button className="view-details-btn" onClick={() => setSelectedHouse(house)}>
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
      {selectedHouse && (
        <Modal show={!!selectedHouse} onHide={() => setSelectedHouse(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedHouse.name} - More Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {selectedHouse.images.map((img, index) => (
                <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                  <img
                    src={img}
                    alt={`House ${index}`}
                    className="img-fluid rounded shadow-sm"
                    onClick={() => setSelectedImage(img)}
                    style={styles.image}
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

const styles = {
  page: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    paddingTop: "100px",
  },
  rowHousesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    height: "100%", // Ensures equal height
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  cardText: {
    color: "#777",
  },
  viewDetailsBtn: {
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  viewDetailsBtnHover: {
    backgroundColor: "#0056b3",
  },
  image: {
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  },
  imageHover: {
    transform: "scale(1.05)",
  },
};

export default RowHouses;
