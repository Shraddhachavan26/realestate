import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/rb1.jpg";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Amit Sharma", rating: 5, feedback: "Amazing experience, very professional service!" },
    { id: 2, name: "Priya Mehta", rating: 4, feedback: "Great properties and hassle-free buying process." },
    { id: 3, name: "Rahul Verma", rating: 5, feedback: "Highly recommended! Smooth and reliable service." },
  ]);

  const [newReview, setNewReview] = useState({ name: "", email: "", feedback: "" });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const addReview = () => {
    if (newReview.name && newReview.email && newReview.feedback) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1, rating: 5 }]);
      setNewReview({ name: "", email: "", feedback: "" });
    }
  };

  return (
    <div
      className="reviews-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "100px",
        position: "relative",
      }}
    >
      <div style={styles.overlay}></div>
      <Navbar />
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={12} className="text-center">
            <h2 style={styles.reviewTitle}>Customer Reviews</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {reviews.map((review) => (
            <Col key={review.id} md={4} sm={6} xs={12} className="mb-4">
              <Card style={styles.reviewCard}>
                <Card.Body>
                  <Card.Title style={styles.customerName}>{review.name}</Card.Title>
                  <Card.Text style={styles.customerFeedback}>"{review.feedback}"</Card.Text>
                  <div style={styles.customerRating}>{"⭐".repeat(review.rating)}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Review Form */}
        <Row className="justify-content-center mt-5">
          <Col md={8} className="d-flex justify-content-center">
            <Card style={styles.reviewForm}>
              <Card.Body>
                <h4 style={styles.formTitle}>Add Your Reviews</h4>
                <Form>
                  <Row className="mb-3 align-items-center">
                    <Col md={3}><Form.Label style={styles.formLabel}>Name</Form.Label></Col>
                    <Col md={9}><Form.Control type="text" name="name" value={newReview.name} onChange={handleChange} placeholder="Enter your full name" style={styles.input} /></Col>
                  </Row>
                  <Row className="mb-3 align-items-center">
                    <Col md={3}><Form.Label style={styles.formLabel}>Email</Form.Label></Col>
                    <Col md={9}><Form.Control type="email" name="email" value={newReview.email} onChange={handleChange} placeholder="Enter your email" style={styles.input} /></Col>
                  </Row>
                  <Row className="mb-3 align-items-center">
                    <Col md={3}><Form.Label style={styles.formLabel}>Add Review</Form.Label></Col>
                    <Col md={9}><Form.Control as="textarea" rows={4} name="feedback" value={newReview.feedback} onChange={handleChange} placeholder="Write your review here..." style={styles.textarea} /></Col>
                  </Row>
                  <Button variant="primary" style={styles.submitButton} onClick={addReview}>Submit Review</Button>
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

// **Styling for the Reviews Page**
const styles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
  },
  reviewTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    display: "inline-block",
    borderRadius: "10px",
  },
  reviewCard: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    textAlign: "center",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  customerName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  customerFeedback: {
    fontSize: "16px",
    fontStyle: "italic",
  },
  customerRating: {
    fontSize: "20px",
    color: "#FFD700",
    marginTop: "5px",
  },
  reviewForm: {
    background: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    marginBottom: "50px",
  },
  formTitle: {
    textAlign: "center",
    color: "white",
    marginBottom: "15px",
  },
  formLabel: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
};

export default Reviews;
