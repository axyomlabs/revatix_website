import React, { useState, useRef, useEffect } from "react";
import productLogo from "../Assets/isp.png";

export default function Hero() {
  const [showServices, setShowServices] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [descriptionPos, setDescriptionPos] = useState({ top: 0, left: 0 });
  const [bottomBoxPos, setBottomBoxPos] = useState({ x: 0, y: 0 });
  const [descKey, setDescKey] = useState(0);
  const cardRef = useRef(null);

  const serviceNames = [
    "CRM",
    "PR-069",
    "Radius",
    "Inventory Management",
    "Accounting and Reports",
    "Network Monitoring",
    "HR Module",
  ];

  const serviceDescriptions = {
    "CRM": "Streamlines customer interactions, manages leads, and enhances client engagement within ISP 360.",
    "PR-069": "Automates device provisioning, monitoring, and customer connectivity workflows efficiently.",
    "Radius": "Handles authentication and access control for ISP users, ensuring secure and smooth connectivity.",
    "Inventory Management": "Keeps track of ISP equipment, modems, and network assets with real-time updates.",
    "Accounting and Reports": "Generates billing, invoices, and performance reports for accurate financial insights.",
    "Network Monitoring": "Monitors network uptime, traffic, and performance metrics for proactive issue resolution.",
    "HR Module": "Manages employee records, attendance, and payroll operations for smooth HR workflows.",
  };

  const servicePositions = [
    { x: -600, y: -220 },
    { x: -600, y: 0 },
    { x: -600, y: 220 },
    { x: 350, y: -220 },
    { x: 350, y: 0 },
    { x: 350, y: 220 },
    { x: 0, y: 0 }, // placeholder for HR module
  ];

  const moduleRefs = useRef([]);

  useEffect(() => {
  if (cardRef.current) {
    const rect = cardRef.current.getBoundingClientRect();
    // HR Module bottom box slightly left of center and more bottom
    setBottomBoxPos({
      x: -90, // moved further left
      y: rect.height / 2 + 180,
    });
  }
}, [showServices]);


  useEffect(() => {
    if (selectedModule !== null) {
      const index = serviceNames.indexOf(selectedModule);
      const moduleBox = moduleRefs.current[index];
      if (moduleBox) {
        const rect = moduleBox.getBoundingClientRect();
        setDescriptionPos({
          top: rect.bottom + window.scrollY + 10,
          left: rect.left + rect.width / 2 + window.scrollX,
        });
        setDescKey(prev => prev + 1); // trigger animation on each click
      }
    }
  }, [selectedModule, showServices]);

  return (
    <section
      id="home"
      className="hero"
      style={{
        background: `radial-gradient(circle at center, rgba(97, 61, 255, 1), rgba(113, 37, 255, 0.98), rgba(53, 0, 243, 0.94))`,
        position: "relative",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "visible",
        padding: "20px",
      }}
    >
      <style>{`
        .fade-up { opacity:0; transform:translateY(20px); animation:fadeUp 0.8s forwards; }
        .fade-up-delay1 { animation-delay:0.3s; }
        .fade-up-delay2 { animation-delay:0.6s; }
        .fade-up-delay3 { animation-delay:0.9s; }
        @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }

        .product-card {
          position: relative;
          background:linear-gradient(135deg, rgba(234, 251, 255, 1), #e3e4f0ff);
          color:#111827;
          padding:25px;
          border-radius:12px;
          box-shadow:0 8px 20px rgba(255, 255, 255, 0.99);
          width:360px;
          text-align:center;
          z-index:10;
          opacity:0;
          transform:translateY(20px);
          animation:fadeUp 0.8s forwards;
          animation-delay:0.9s;
        }

        .service-box {
          background: linear-gradient(135deg, #64b4ffff, #592b74ff);
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(255, 255, 255, 1);
          padding: 16px 22px;
          text-align: center;
          min-width: 140px;
          max-width: 220px;
          color: #fff;
          opacity: 0;
          transform: translate(0,0);
          transition: all 1s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .service-box p { margin: 0; font-size:1rem; font-weight:600; letter-spacing:0.5px; line-height:1.3; }
        .service-box.show { opacity:1; }
        .service-box:hover { transform: scale(1.1); box-shadow:0 12px 28px rgba(0,0,0,0.4); }

        .module-description {
          position: absolute;
          transform: translateX(-50%) translateY(-10px);
          max-width: 280px;
          background: rgba(48, 3, 85, 0.6);
          padding: 15px 20px;
          border-radius: 12px;
          font-size: 0.95rem;
          line-height: 1.4;
          text-align: center;
          z-index: 20;
          opacity: 0;
          animation: descFade 0.6s forwards;
        }

        @keyframes descFade {
          0% { opacity:0; transform:translateX(-50%) translateY(-10px); }
          50% { transform:translateX(-50%) translateY(-5px); }
          100% { opacity:1; transform:translateX(-50%) translateY(0); }
        }
      `}</style>

      <h1 className="fade-up fade-up-delay1" style={{ marginBottom: "20px" }}>
        Welcome to Revatix IT Solutions
      </h1>
      <p className="fade-up fade-up-delay2" style={{ maxWidth: "600px", marginBottom: "30px" }}>
        Empowering businesses with innovation.
      </p>

      <div className="product-card fade-up fade-up-delay3" ref={cardRef}>
        <img src={productLogo} alt="Product Logo" style={{ width: "100px", height: "100px", marginBottom: "-35px" }} />
        <h3> Our Product Showcase</h3>
        <p>Discover our innovative IT solutions for modern businesses.</p>
        <button
          onClick={() => setShowServices(!showServices)}
          style={{
            padding: "10px 18px",
            background: "rgba(77, 123, 248, 1)",
            color: "#ffffffff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Modules
        </button>
      </div>

      {servicePositions.map((pos, i) => {
        const isBottom = i === 6;
        const transformPos = showServices
          ? isBottom
            ? `translate(${bottomBoxPos.x}px, ${bottomBoxPos.y}px)` // HR Module
            : `translate(${pos.x}px, ${pos.y}px)`
          : `translate(0,0)`;

        return (
          <div
            key={i}
            ref={(el) => (moduleRefs.current[i] = el)}
            className={`service-box ${showServices ? "show" : ""}`}
            style={{ position: "absolute", top: "50%", left: "50%", transform: transformPos, zIndex: 15 }}
            onClick={() => setSelectedModule(serviceNames[i])}
          >
            <p>{serviceNames[i]}</p>
          </div>
        );
      })}

      {selectedModule && showServices && (
        <div
          key={descKey}
          className="module-description"
          style={{ top: descriptionPos.top, left: descriptionPos.left }}
        >
          {serviceDescriptions[selectedModule]}
        </div>
      )}
    </section>
  );
}
