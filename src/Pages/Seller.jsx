import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Client1 from "../Images/A1.jpeg";
import Client2 from "../Images/A2.jpeg";
import Client3 from "../Images/A3.jpeg";

const sellers = [
  {
    id: 1,
    name: "Neha Sharma",
    property: "Luxury 3BHK Apartment in Downtown",
    price: "₹26,00,000",
    feedback: "Selling my house with this agency was smooth and hassle-free. Highly recommended!",
    email: "johndoe@example.com",
    phone: "+91 98765 43210",
    experience: "10+ years in real estate",
    rating: "⭐⭐⭐⭐⭐",
    image: Client1,
  },
  {
    id: 2,
    name: "Priya Patel",
    property: "Modern Villa with a Pool",
    price: "₹45,00,000",
    feedback: "The team guided me through the entire process, and I got the best price for my property!",
    email: "emilysmith@example.com",
    phone: "+91 87654 32109",
    experience: "15+ years in commercial real estate",
    rating: "⭐⭐⭐⭐⭐",
    image: Client2,
  },
  {
    id: 3,
    name: "Amit Verma",
    property: "Cozy 2BHK Apartment in Suburbs",
    price: "₹18,00,000",
    feedback: "Professional service and great market insights helped me sell quickly!",
    email: "michaelj@example.com",
    phone: "+91 76543 21098",
    experience: "12+ years in property investments",
    rating: "⭐⭐⭐⭐",
    image: Client3,
  },
];

const Sellers = () => {
  return (
    <>
      <Navbar />
      <section id="sellers">
        <div className="container">
          <h2 className="section-heading">
            Meet Our <span className="highlight">Top Sellers</span>
          </h2>
          <p className="sub-text">
            Our experienced sellers have found great success with our agency.
          </p>
          <div className="seller-row">
            {sellers.map((seller) => (
              <div key={seller.id} className="seller-card">
                <div className="seller-image">
                  <img src={seller.image} alt={seller.name} />
                </div>
                <div className="seller-info">
                  <h3>{seller.name}</h3>
                  <p className="property">{seller.property}</p>
                  <p className="price">{seller.price}</p>
                  <p className="feedback">"{seller.feedback}"</p>
                  <p className="experience">{seller.experience}</p>
                  <p className="rating">{seller.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Seller Section */}
      <section id="become-seller">
        <div className="container">
          <h2 className="section-heading">Want to Become a Seller?</h2>
          <p className="sub-text">Join our platform to list your property and get the best market value.</p>
          <div className="seller-form">
            <input type="text" placeholder="Your Name" className="seller-input" />
            <input type="text" placeholder="Property Type" className="seller-input" />
            <input type="text" placeholder="Expected Price" className="seller-input" />
            <textarea placeholder="Property Details" className="seller-input"></textarea>
            <button className="seller-button">Submit Your Property</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        #become-seller {
          background-color: #fff;
          padding: 60px 0;
          text-align: center;
        }
        .seller-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          max-width: 500px;
          margin: 0 auto;
        }
        .seller-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .seller-button {
          background: #8C4A24;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .seller-button:hover {
          background: #6b3a1b;
        }
      `}</style>
      <Footer />

      <style jsx>{`
        #sellers {
          background-color: #f8f9fa;
          padding-top: 100px;
          padding-bottom: 60px;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-heading {
          font-size: 36px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .highlight {
          color: #8C4A24;
        }

        .sub-text {
          font-size: 18px;
          color: #666;
          margin-bottom: 40px;
        }

        .seller-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .seller-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 260px;
          transition: transform 0.3s ease;
          text-align: center;
          padding-bottom: 15px;
        }

        .seller-card:hover {
          transform: translateY(-5px);
        }

        .seller-image {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .seller-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .seller-info {
          padding: 15px;
        }

        .seller-info h3 {
          font-size: 20px;
          color: #333;
          margin-bottom: 5px;
        }

        .property, .price, .feedback, .experience, .rating, .contact {
          font-size: 14px;
          color: #555;
          margin-top: 5px;
        }

        @media (max-width: 1024px) {
          .seller-row {
            flex-wrap: wrap;
            justify-content: center;
          }

          .seller-card {
            width: 45%;
          }
        }

        @media (max-width: 768px) {
          .seller-row {
            flex-direction: column;
          }

          .seller-card {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Sellers;
