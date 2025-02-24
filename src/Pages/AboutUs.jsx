import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutImage from "../Images/ContactUsBg.png"; // Replace with your actual image file

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            
            {/* Left Side - Large Image with Full Height Background */}
            <div className="col-xl-6 col-lg-6 about-image-container">
              <img src={AboutImage} alt="About Us" className="about-image" />
            </div>

            {/* Right Side - Content */}
            <div className="col-xl-6 col-lg-6 about-content">
              
              {/* Full-Width "About Us" Heading */}
              <div className="about-heading">
                <h1>About Us</h1>
              </div>

              <p>
                <strong>Be Real Estates</strong> has been a trusted name in real estate for <strong>30 years</strong>. 
                We specialize in luxury residential and commercial properties, offering **premium developments** 
                in key cities.
              </p>

              {/* Expensive Residencies */}
              <h3>Our Signature Properties</h3>
              <ul>
                <li>🏡 **Skyline Towers - Mumbai**</li>
                <li>🏡 **The Imperial Heights - Delhi**</li>
                <li>🏡 **Palm Springs Estate - Pune**</li>
              </ul>

              {/* Our Engineers */}
              <h3>Meet Our Experts</h3>
              <ul>
                <li>👷‍♂️ **Eng. Rajesh Mehta** - Structural Engineer, 25+ years of experience</li>
                <li>👷‍♀️ **Eng. Priya Sharma** - Architect & Urban Planner, 20+ years of experience</li>
                <li>👷‍♂️ **Eng. Ankit Verma** - Civil Engineer, 18+ years of experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Inside the Same File */}
      <style jsx>{`
        /* About Us Section */
        #about {
          padding: 0;
          margin: 0;
        }

        /* Left Side - Large Image with Full Height Background */
        .about-image-container {
          background-color: #8C4A24;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          height: 100vh; /* Full height to extend to footer */
          margin-bottom: -10px; /* Reduce gap before footer */
        }

        /* Image Styling */
        .about-image {
          width: 95%;
          max-width: 900px;
          height: auto;
          border-radius: 50px;
        }

        /* Right Side - Content */
        .about-content {
          padding: 30px;
          background-color: white;
          position: relative;
        }

        /* Full-Width About Us Heading */
        .about-heading {
          background-color: white;
          color: black;
          text-align: center;
          padding: 40px 0;
          margin-bottom: 10px;
          font-size: 24px;
          font-weight: bold;
        }

        /* Reduce Footer Gap */
        .about-content {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-content {
            padding: 20px;
          }

          .about-heading {
            font-size: 24px;
          }

          .about-image {
            max-width: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUs;
