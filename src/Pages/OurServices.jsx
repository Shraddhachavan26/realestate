import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/Ourservices.jpg";

// List of Locations
const locations = [
  { id: 1, name: "Karad" },
  { id: 2, name: "Satara" },
  { id: 3, name: "Viddyanagar" },
  { id: 4, name: "Saidapur" },
  { id: 5, name: "Banawadi" },
  { id: 6, name: "Malkapura" },
  { id: 7, name: "Varunji" },
  { id: 8, name: "Vimantal" },
  { id: 9, name: "Ogalewadi" },
  { id: 10, name: "Mundhe" },
];

const OurServices = () => {
  return (
    <div style={styles.page}>
      <Navbar />

      {/* Our Locations Heading */}
      <h1 style={styles.heading}>Where We Serve</h1>

      <Container style={styles.container}>
        <Row style={styles.row}>
          {locations.map((location) => (
            <Col key={location.id} md={4} sm={6} xs={12} style={styles.col}>
              <Card style={styles.card}>
                <Card.Body>
                  <Card.Title style={styles.cardTitle}>{location.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

// CSS in JS (Updated Styling)
const styles = {
  page: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    paddingTop: "100px",
    position: "relative",
    textAlign: "center",
  },
  heading: {
    color: "black",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 5px rgba(255, 255, 255, 0.3)",
    marginBottom: "20px",
  },
  container: {
    marginTop: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  col: {
    marginBottom: "15px",
  },
  card: {
    background: "rgba(0, 0, 0, 0.7)", // Slightly transparent black background
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    transition: "0.3s ease-in-out",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
};

export default OurServices;
