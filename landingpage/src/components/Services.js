import React from "react";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px 30px 80px", background: "#f9f9f9" }}>
      <style>{`
        .services-container {
          display: flex; gap: 30px; justify-content: center; flex-wrap: wrap;
        }
        .service-card {
          background: white; padding: 25px;
          border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          width: 250px; text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .service-card img { width: 60px; height: 60px; margin-bottom: 15px; }
        .service-card h3 { font-size: 1.2rem; margin-bottom: 10px; color: #111827; }
        .service-card p { font-size: 0.95rem; color: #4b5563; }
      `}</style>

      <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "2rem", color: "#111827" }}>
        Our Services
      </h2>

      <div className="services-container">
        <div className="service-card">
          <img src={service1} alt="Cloud Solutions" />
          <h3>Cloud Solutions</h3>
          <p>Scalable and secure cloud computing services tailored for your business.</p>
        </div>
        <div className="service-card">
          <img src={service2} alt="AI & Analytics" />
          <h3>AI & Analytics</h3>
          <p>Leverage AI and data analytics to optimize decision making.</p>
        </div>
        <div className="service-card">
          <img src={service3} alt="Software Development" />
          <h3>Software Development</h3>
          <p>Custom enterprise software solutions to meet your business needs.</p>
        </div>
      </div>
    </section>
  );
}


