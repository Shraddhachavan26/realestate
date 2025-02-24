import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* About Us Section */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionTitle}>About Us</h4>
          <p style={styles.text}>Helping you find your dream home with the best real estate services.</p>
        </div>

        {/* Quick Links Section */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionTitle}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/blogs" style={styles.link}>Blogs</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionTitle}>Contact Info</h4>
          <p style={styles.text}>Email: berealestate@.com</p>
          <p style={styles.text}>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Section */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionTitle}>Follow Us</h4>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <p style={styles.text}>&copy; 2025 Be Real Estates. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Inline CSS Styles
const styles = {
  footer: {
    backgroundColor: "#8C4A24", // Matches Navbar Color
    color: "white",
    padding: "20px 10px", // Reduced padding for a smaller size
    textAlign: "center",
    fontSize: "14px", // Smaller text
  },
  footerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  footerSection: {
    flex: "1",
    minWidth: "180px",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "16px",
    marginBottom: "5px",
    textDecoration: "underline",
  },
  text: {
    fontSize: "13px",
    lineHeight: "1.4",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "13px",
    transition: "0.3s",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  socialIcon: {
    color: "white",
    fontSize: "18px",
    transition: "0.3s",
  },
  footerBottom: {
    marginTop: "10px",
    paddingTop: "5px",
    borderTop: "1px solid white",
  },
};

export default Footer;
