import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBuilding  } from "react-icons/fa";
import img1 from "../Images/FlatCard1.png";
import img2 from "../Images/RowHouseCard2.jpeg";
import img3 from "../Images/FurnishedFlatCard4.jpeg";
import img4 from "../Images/LandPlot.jpg";
import achievementsBg from "../Images/achive.jpg";

// Background images for slideshow
const backgroundImages = [
  require("../Images/home.png"),
  require("../Images/home2.png"),
  require("../Images/building.jpg"),
  require("../Images/LandPlot.jpg"),
  require("../Images/Finle.jpg"),
];

const properties = [
  { id: 1, title: "Flats", text: "Rates start from ₹35 Lakhs", img: img1, link: "/properties/flats" },
  { id: 2, title: "Row Houses", text: "Rates start from ₹85 Lakhs", img: img2, link: "/properties/rowhouses" },
  { id: 3, title: "Furnished Flats", text: "₹15,000/per month", img: img3, link: "/properties/furnishedflats" },
  { id: 4, title: "Plots", text: "Rates start from ₹25 Lakhs", img: img4, link: "/properties/plots" },
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Auto-slide effect for background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      if (searchQuery.toLowerCase().includes("flats")) navigate("/properties/flats");
      else if (searchQuery.toLowerCase().includes("row houses")) navigate("/properties/rowhouses");
      else if (searchQuery.toLowerCase().includes("furnished flats")) navigate("/properties/furnishedflats");
      else if (searchQuery.toLowerCase().includes("plots")) navigate("/properties/plots");
      else if (searchQuery.toLowerCase().includes("services")) navigate("/properties/ourservices");
      else if (searchQuery.toLowerCase().includes("contact")) navigate("/contact");
    }
  };

  return (
    <div>
      {/* Slideshow Background Section */}
      <div
        className="background-section"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          transition: "background-image 1s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.6)", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
          <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>Find your Dream House with Us.</h1>
        </div>
        <Form className="d-flex" style={{ width: "100%", backgroundColor: "rgba(26, 26, 25, 0.7)", padding: "15px", borderRadius: "8px", alignItems: "center" }}>
          <FaBuilding style={{ color: "white", fontSize: "22px", marginRight: "10px" }} />
          <Form.Control
            type="text"
            placeholder="Search properties, services, locations..."
            className="me-2"
            style={{ color: "white", backgroundColor: "transparent", border: "1px solid white", fontSize: "20px", padding: "12px" }}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <Button variant="light" onClick={handleSearch} style={{ fontSize: "22px", padding: "12px 18px" }}>
            <FaSearch />
          </Button>
        </Form>
      </div>

      <Navbar />

            <Container className="mt-5 text-center organization-section" style={{ backgroundColor: "#c3cfe2", padding: "40px", borderRadius: "8px" }}>
              <h2 className="section-title">Our Organization</h2>
              <p className="section-description">We are a leading real estate agency dedicated to helping buyers and sellers find their perfect properties. Our extensive network and expert team ensure a seamless experience whether you're buying your dream home or selling for the best value.</p>
              <Row className="mt-4">
                <Col md={6} className="info-box">
                  <h4>Buying Details</h4>
                  <p>We provide a wide range of options, from affordable flats to luxury villas. Our experts assist in securing the best deals, ensuring transparency and smooth transactions.</p>
                </Col>
                <Col md={6} className="info-box">
                  <h4>Selling Details</h4>
                  <p>We help sellers get the best price for their properties with effective marketing strategies and a vast network of potential buyers.</p>
                </Col>
              </Row>
            </Container>

      {/* Property Cards Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Explore Our Properties</h2>
        <Row className="justify-content-center">
          {properties.map((property) => (
            <Col key={property.id} md={3} className="d-flex align-items-stretch">
              <Card className="mb-4 shadow-lg property-card" style={{ height: "400px", transition: "0.3s", cursor: "pointer" }}>
                <Card.Img variant="top" src={property.img} alt={property.title} style={{ height: "60%", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>{property.text}</Card.Text>
                  <Button variant="dark" as={Link} to={property.link} style={{ color: "white", marginTop: "auto" }}>
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our Achievements Section */}
      <div
        className="achievements-section text-center text-white py-5 mt-5"
        style={{
          backgroundImage: `url(${achievementsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
        }}
      >
        <h2 className="mb-4">Our Achievements</h2>
        <Container>
          <Row className="justify-content-center">
            <Col md={3} className="mb-3">
              <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                <h3>500+</h3>
                <p>Completed Projects</p>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                <h3>120+</h3>
                <p>Happy Clients</p>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                <h3>95+</h3>
                <p>Luxury Homes Sold</p>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="achievement-box p-4 bg-white text-dark bg-opacity-75 rounded">
                <h3>140+</h3>
                <p>Commercial Properties</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
