import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Agent1 from "../Images/A1.jpeg";
import Agent2 from "../Images/A2.jpeg";
import Agent3 from "../Images/A3.jpeg";
import Agent4 from "../Images/A4.jpeg";

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Piya Thakur",
      position: "Senior Property Consultant",
      title: "Luxury Property Expert",
      specialization: "High-End Residential & Villas",
      email: "johndoe@example.com",
      phone: "+91 98765 43210",
      experience: "10+ years in real estate",
      rating: "⭐⭐⭐⭐⭐",
      image: Agent1,
    },
    {
      id: 2,
      name: "Minal Kumar",
      position: "Commercial Real Estate Director",
      title: "Corporate Property Specialist",
      specialization: "Office Spaces & Commercial Properties",
      email: "janesmith@example.com",
      phone: "+91 87654 32109",
      experience: "15+ years in commercial real estate",
      rating: "⭐⭐⭐⭐⭐",
      image: Agent2,
    },
    {
      id: 3,
      name: "Pradip Mehata",
      position: "Investment Property Manager",
      title: "Investment Consultant",
      specialization: "Real Estate Investment & Development",
      email: "michaelj@example.com",
      phone: "+91 76543 21098",
      experience: "12+ years in property investments",
      rating: "⭐⭐⭐⭐",
      image: Agent3,
    },
    {
      id: 4,
      name: "Sophia Jain",
      position: "Luxury Homes Specialist",
      title: "Premium Housing Advisor",
      specialization: "Luxury Apartments & Smart Homes",
      email: "sophiaw@example.com",
      phone: "+91 65432 10987",
      experience: "8+ years in luxury real estate",
      rating: "⭐⭐⭐⭐⭐",
      image: Agent4,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Agents Section */}
      <section id="agents">
        <div className="container">
          {/* Heading Section */}
          <h2 className="section-heading">
            Meet Our <span className="highlight">Top Agents</span>
          </h2>
          <p className="sub-text">
            Our expert agents are here to help you buy, sell, and invest in real estate.
          </p>

          {/* Agent Cards in One Line */}
          <div className="agent-row">
            {agents.map((agent) => (
              <div key={agent.id} className="agent-card">
                {/* Agent Image */}
                <div className="agent-image">
                  <img src={agent.image} alt={agent.name} />
                </div>

                {/* Agent Info */}
                <div className="agent-info">
                  <h3>{agent.name}</h3>
                  <p className="position">{agent.position}</p>
                  <p>{agent.title}</p>
                  <p>{agent.specialization}</p>
                  <p className="experience">{agent.experience}</p>
                  <p className="rating">{agent.rating}</p>
                  <p className="contact">📧 {agent.email}</p>
                  <p className="contact">📞 {agent.phone}</p>

                  {/* Ask Your Queries Button */}
                  <button className="query-button">Ask Your Queries</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS Inside the Same File */}
      <style jsx>{`
        /* General Styles */
        #agents {
          background-color: #f8f9fa;
          padding-top: 100px; /* Added padding to fix hidden heading */
          padding-bottom: 60px;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Heading */
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

        /* Agent Cards Row */
        .agent-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap; /* Ensures responsiveness */
        }

        /* Agent Card */
        .agent-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 260px;
          transition: transform 0.3s ease;
          text-align: center;
          padding-bottom: 15px;
        }

        .agent-card:hover {
          transform: translateY(-5px);
        }

        /* Agent Image */
        .agent-image {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .agent-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Agent Info */
        .agent-info {
          padding: 15px;
        }

        .agent-info h3 {
          font-size: 20px;
          color: #333;
          margin-bottom: 5px;
        }

        .position {
          font-size: 14px;
          color: #8C4A24;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .experience {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
        }

        .rating {
          font-size: 16px;
          color: gold;
          margin-bottom: 10px;
        }

        .contact {
          font-size: 14px;
          color: #555;
          margin-top: 5px;
        }

        /* Ask Your Queries Button */
        .query-button {
          background: #8C4A24;
          color: white;
          font-size: 14px;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.3s ease;
        }

        .query-button:hover {
          background: #6b3a1b;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .agent-row {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .agent-card {
            width: 45%;
          }
        }

        @media (max-width: 768px) {
          .agent-row {
            flex-direction: column;
          }

          .agent-card {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Agents;
