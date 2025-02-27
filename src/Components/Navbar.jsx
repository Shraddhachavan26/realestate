import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      {/* Company Name + Navigation on the Same Line */}
      <div style={styles.navbarContent}>
        <div style={styles.brandName}>
          <span style={styles.underline}>Be Real Estates</span>
        </div>

        {/* Desktop Navigation */}
        <ul style={styles.navLinks}>
          <li><Link to="/home" style={styles.navItem}>Home</Link></li>
          <li><Link to="/aboutus" style={styles.navItem}>About Us</Link></li>
          <li><Link to="/blogs" style={styles.navItem}>Blogs</Link></li>
          <li><Link to="/agents" style={styles.navItem}>Agents</Link></li>
          <li><Link to="/seller" style={styles.navItem}>Seller</Link></li>
          <li><Link to="/buyer" style={styles.navItem}>Buy</Link></li>

          {/* Properties Dropdown */}
          <NavDropdown title="Properties" id="nav-dropdown" style={styles.navDropdown}>
            <NavDropdown.Item as={Link} to="/properties/flats">Flats</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/properties/plots">Plots</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/properties/furnishedflats">Furnished Flats</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/properties/rowhouses">Row Houses</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/properties/ourservices">Our Services</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/properties/reviews">Reviews</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <li><Link to="/contactus" style={styles.contactBtn}>Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button style={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>☰</button>

      {/* Mobile Menu */}
      <div style={{ ...styles.mobileMenu, display: isOpen ? "flex" : "none" }}>
        <ul style={styles.mobileMenuList}>
          <li><Link to="/home" onClick={() => setIsOpen(false)} style={styles.mobileNavItem}>Home</Link></li>
          <li><Link to="/aboutus" onClick={() => setIsOpen(false)} style={styles.mobileNavItem}>About Us</Link></li>
          <li><Link to="/blogs" onClick={() => setIsOpen(false)} style={styles.mobileNavItem}>Blogs</Link></li>
          <li><Link to="/contactus" onClick={() => setIsOpen(false)} style={styles.mobileNavItem}>Contact Us</Link></li>

          <li style={styles.dropdown}>
            <button style={styles.dropdownBtn} onClick={() => setDropdownOpen(!dropdownOpen)}>
              Properties ▼
            </button>
            {dropdownOpen && (
              <ul style={styles.dropdownContent}>
                <li><Link to="/properties/flats" onClick={() => setIsOpen(false)} style={styles.dropdownItem}>Flats</Link></li>
                <li><Link to="/properties/plots" onClick={() => setIsOpen(false)} style={styles.dropdownItem}>Plots</Link></li>
                <li><Link to="/properties/rowhouses" onClick={() => setIsOpen(false)} style={styles.dropdownItem}>Row Houses</Link></li>
                <li><Link to="/properties/furnishedflats" onClick={() => setIsOpen(false)} style={styles.dropdownItem}>Furnished Flats</Link></li>
                <li><Link to="/properties/ourservices" onClick={() => setIsOpen(false)} style={styles.dropdownItem}>Our Services</Link></li>
                <li><Link to="/properties/reviews" onClick={() => setIsOpen(false)} style={styles.dropdownItem}>Reviews</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Inline CSS Styles
const styles = {
  navbar: {
    backgroundColor: "#8C4A24",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 40px", // Adjusted padding for better spacing
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    fontSize: "18px",
    height: "80px", // Adjusted height
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
  },
  brandName: {
    fontSize: "22px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginRight: "20px",
  },
  underline: {
    textDecoration: "underline",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "25px", // Improved spacing
    alignItems: "center",
  },
  navItem: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    padding: "10px 15px",
    transition: "all 0.3s",
  },
  contactBtn: {
    backgroundColor: "white",
    color: "#8C4A24",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "all 0.3s",
    textDecoration: "none",
  },
  menuBtn: {
    display: "none",
    background: "none",
    color: "white",
    fontSize: "28px",
    border: "none",
    cursor: "pointer",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#8C4A24",
    flexDirection: "column",
    padding: "20px",
    display: "none",
  },
  mobileMenuList: {
    listStyle: "none",
    padding: 0,
  },
  mobileNavItem: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    display: "block",
    padding: "12px 0",
  },
  dropdown: {
    position: "relative",
  },
  dropdownBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    padding: "12px",
  },
  dropdownContent: {
    listStyle: "none",
    background: "white",
    color: "#333",
    padding: "12px",
    borderRadius: "5px",
    position: "absolute",
    top: "50px",
    left: 0,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "200px",
  },
  dropdownItem: {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#8C4A24",
  },
};

// Responsive Design
if (window.innerWidth <= 768) {
  styles.navLinks.display = "none";
  styles.menuBtn.display = "block";
  styles.mobileMenu.display = "flex";
}

export default Navbar;
