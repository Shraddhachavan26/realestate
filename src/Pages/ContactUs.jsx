import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Ensure correct path for the image
import contactImage from "../Images/contact1.jpg";

const ContactUs = () => {
  return (
    <div style={styles.contactPage}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ ...styles.contactHero, backgroundImage: `url(${contactImage})` }}>
        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>Get in Touch</h1>
          <p style={styles.heroSubtitle}>We'd love to hear from you! Reach out to us anytime.</p>
        </div>
      </section>

      {/* Cards Section */}
      <Container fluid style={styles.cardsContainer}>
        <Row style={styles.rowContainer}>
          {/* Google Map */}
          <Col md={4} style={styles.cardWrapper}>
            <Card style={styles.infoCard}>
              <Card.Body style={styles.cardBody}>
                <Card.Title style={styles.cardTitle}>🌍 Our Location</Card.Title>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?... (your Google Maps link here)"
                  width="100%"
                  height="100%"
                  style={{ border: "0", flexGrow: 1, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>

          {/* Meet Us Card */}
          <Col md={4} style={styles.cardWrapper}>
            <Card style={styles.infoCard}>
              <Card.Body style={styles.cardBody}>
                <Card.Title style={styles.cardTitle}>📍 Meet Us</Card.Title>
                <p style={styles.text}>
                  Have questions? Visit us at our office and let's discuss your needs.
                </p>
                <ul style={styles.infoList}>
                  <li><FaPhone style={styles.contactIcon} /> <strong>Phone:</strong> +466723723666</li>
                  <li><FaEnvelope style={styles.contactIcon} /> <strong>Email:</strong> contact@admin.com</li>
                  <li><FaMapMarkerAlt style={styles.contactIcon} /> <strong>Address:</strong> 1784 Griffin Street, Alabama</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form Card */}
          <Col md={4} style={styles.cardWrapper}>
            <Card style={styles.infoCard}>
              <Card.Body style={styles.cardBody}>
                <Card.Title style={styles.cardTitle}>✉️ Send a Message</Card.Title>
                <p style={styles.text}>
                  Have any inquiries? Drop us a message and we'll get back to you soon.
                </p>
                <Form style={{ flexGrow: 1 }}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Your Name" required style={styles.input} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control as="textarea" rows={4} placeholder="Your Message" required style={styles.textarea} />
                  </Form.Group>
                  <Button 
                    type="submit" 
                    style={styles.sendButton}
                    onMouseOver={(e) => e.target.style.background = styles.sendButtonHover.background}
                    onMouseOut={(e) => e.target.style.background = styles.sendButton.background}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  contactPage: {
    fontFamily: "Arial, sans-serif",
  },
  contactHero: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "87vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    color: "white",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    textAlign: "center",
    padding: "30px",
  },
  heroTitle: {
    fontSize: "50px",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  heroSubtitle: {
    fontSize: "18px",
    fontWeight: "400",
    opacity: "0.9",
  },
  cardsContainer: {
    position: "relative",
    top: "-40px",
    zIndex: 2,
  },
  rowContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "nowrap",
    padding: "0",
    margin: "0",
    gap: "0",
  },
  cardWrapper: {
    flex: "1",
    padding: "10px",
    margin: "0",
  },
  infoCard: {
    background: "rgb(107, 116, 133)",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    width: "100%",
    height: "450px", // Enlarged height for better visibility
    color: "black",
    margin: "10px",
    transition: "0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "20px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  text: {
    fontSize: "16px",
    opacity: "0.9",
    marginBottom: "15px",
  },
  infoList: {
    listStyle: "none",
    padding: "0",
    fontSize: "16px",
  },
  contactIcon: {
    marginRight: "8px",
    color: "#f8c471",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #bbb",
    borderRadius: "8px",
    fontSize: "15px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #bbb",
    borderRadius: "8px",
    fontSize: "16px",
    height: "120px",
    resize: "none",
    marginBottom: "10px",
  },
  sendButton: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    background: "linear-gradient(135deg,rgb(78, 220, 194),rgb(180, 51, 216))",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s ease-in-out",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  sendButtonHover: {
    background: "linear-gradient(135deg,rgb(222, 91, 91),rgb(232, 106, 106))",
    transform: "scale(1.05)",
  },
};

export default ContactUs;
