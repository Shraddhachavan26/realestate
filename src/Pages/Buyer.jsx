import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/buyer.jpg";

const BuyerDetails = () => {
  const [buyer, setBuyer] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    propertyType: "",
    budget: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Buyer details submitted successfully!");
    console.log(buyer);
  };

  return (
    <>
      <Navbar />
      <div className="buyer-container">
        <div className="buyer-card">
          <h2 className="buyer-heading">Buyer Details</h2>
          <form onSubmit={handleSubmit} className="buyer-form">
            <input type="text" name="name" placeholder="Full Name" className="buyer-input" onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Contact Number" className="buyer-input" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" className="buyer-input" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" className="buyer-input" onChange={handleChange} required />
            <select name="propertyType" className="buyer-input" onChange={handleChange} required>
              <option value="">Select Property Type</option>
              <option value="Flats">Flats</option>
              <option value="Plots">Plots</option>
              <option value="Furnished Flats">Furnished Flats</option>
              <option value="Row Houses">Row Houses</option>
            </select>
            <input type="text" name="budget" placeholder="Budget (in INR)" className="buyer-input" onChange={handleChange} required />
            <button type="submit" className="buyer-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
      <style>
        {`
          .buyer-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: url(${backgroundImage}) no-repeat center center/cover;
            padding-top: 120px;
            padding-bottom: 80px;
          }
          .buyer-card {
            background: rgba(167, 164, 164, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 450px;
            text-align: center;
            margin-top: 20px;
          }
          .buyer-heading {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .buyer-form {
            display: flex;
            flex-direction: column;
          }
          .buyer-input {
            padding: 12px;
            margin-bottom: 12px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .buyer-button {
            padding: 12px;
            background-color:rgb(11, 11, 11);
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .buyer-button:hover {
            background-color: #a55b33;
          }
        `}
      </style>
    </>
  );
};

export default BuyerDetails;