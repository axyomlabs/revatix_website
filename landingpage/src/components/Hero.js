import React, { useState, useRef, useEffect } from "react";
import productLogo from "../Assets/isp.png";

export default function Hero() {
  const [showModules, setShowModules] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [descPos, setDescPos] = useState({ top: 0, left: 0 });
  const moduleRefs = useRef([]);
  const cardRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const modules = [
    "CRM",
    "PR-069",
    "Radius",
    "Inventory Management",
    "Accounting and Reports",
    "Network Monitoring",
    "HR Module",
  ];

  const descriptions = {
    CRM: "Streamlines customer interactions, manages leads, and enhances client engagement within ISP 360.",
    "PR-069": "Automates device provisioning, monitoring, and customer connectivity workflows efficiently.",
    Radius: "Handles authentication and access control for ISP users, ensuring secure and smooth connectivity.",
    "Inventory Management": "Keeps track of ISP equipment, modems, and network assets with real-time updates.",
    "Accounting and Reports": "Generates billing, invoices, and performance reports for accurate financial insights.",
    "Network Monitoring": "Monitors network uptime, traffic, and performance metrics for proactive issue resolution.",
    "HR Module": "Manages employee records, attendance, and payroll operations for smooth HR workflows.",
  };

  const calculatePositions = () => {
    const card = cardRef.current;
    if (!card) return [];
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const centerY = rect.top + rect.height / 2 + window.scrollY;

    if (window.innerWidth >= 1024) {
      return [
        { x: centerX - 350, y: centerY - 150 },
        { x: centerX - 350, y: centerY },
        { x: centerX - 350, y: centerY + 150 },
        { x: centerX + 350, y: centerY - 150 },
        { x: centerX + 350, y: centerY },
        { x: centerX + 350, y: centerY + 150 },
        { x: centerX, y: centerY + 220 },
      ];
    }
    return modules.map(() => ({ x: 0, y: 0 }));
  };

  useEffect(() => {
    setPositions(calculatePositions());
    const handleResize = () => setPositions(calculatePositions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedModule !== null) {
      const index = modules.indexOf(selectedModule);
      const modRef = moduleRefs.current[index];
      if (modRef) {
        const rect = modRef.getBoundingClientRect();
        setDescPos({
          top: rect.bottom + window.scrollY + 10,
          left: rect.left + rect.width / 2 + window.scrollX,
        });
      }
    }
  }, [selectedModule, showModules]);

  const handleModuleClick = (module) => {
    if (selectedModule === module) setSelectedModule(null);
    else setSelectedModule(module);
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minHeight: "calc(100vh - 120px)",
        background: "linear-gradient(to bottom, #ffffff, #f5f7fa)",
        color: "#111",
        padding: window.innerWidth < 420 ? "40px 10px" : "60px 20px",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
        overflow: "visible",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 5 }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#1e293b", textAlign: "center" }}>
          Welcome to Revatix IT Solutions
        </h1>
        <p style={{ maxWidth: "600px", marginBottom: "30px", fontSize: "1.1rem", color: "#475569", textAlign: "center" }}>
          Empowering businesses with innovation.
        </p>

        <div
          ref={cardRef}
          className="product-card"
          style={{
            background: "#ffffff",
            color: "#111",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            width: window.innerWidth >= 1024 ? "280px" : "90%",
            maxWidth: "200px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <img
            src={productLogo}
            alt="Product"
            className="product-img"
            style={{
              width: window.innerWidth >= 1024 ? "80px" : "60px",
              height: window.innerWidth >= 1024 ? "80px" : "60px",
              marginBottom: "-20px",
            }}
          />
          <h3 style={{ color: "#1e3a8a", marginBottom: "6px", fontSize: window.innerWidth >= 1024 ? "1.2rem" : "0.9rem" }}>
            Our Product Showcase
          </h3>
          <p style={{ fontSize: window.innerWidth >= 1024 ? "0.9rem" : "0.75rem", color: "#475569" }}>
            Discover our innovative IT solutions for modern businesses.
          </p>
          <button
            onClick={() => setShowModules(!showModules)}
            style={{
              marginTop: "12px",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              background: "#2563eb",
              color: "#fff",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Modules
          </button>
        </div>
      </div>

      {showModules && (
        <div className="modules-container" style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }}>
          {positions.map((pos, i) => (
            <div
              key={i}
              ref={(el) => (moduleRefs.current[i] = el)}
              onClick={() => handleModuleClick(modules[i])}
              className="module-box"
              style={{
                position: window.innerWidth >= 1024 ? "absolute" : "static",
                top: pos.y,
                left: pos.x,
                transform: window.innerWidth >= 1024 ? "translate(-50%, -50%) scale(0.5)" : "none",
                opacity: window.innerWidth >= 1024 ? 0 : 1,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                padding: "10px 14px",
                borderRadius: "10px",
                textAlign: "center",
                cursor: "pointer",
                color: "#1e293b",
                width: window.innerWidth >= 1024 ? "150px" : "90%",
                maxWidth: "180px",
                margin: window.innerWidth >= 1024 ? "0" : "5px auto",
                transition: window.innerWidth >= 1024 ? `all 0.6s ease ${i * 0.1}s` : "none",
                boxSizing: "border-box",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <p style={{ margin: 0, fontWeight: 500 }}>{modules[i]}</p>
            </div>
          ))}
        </div>
      )}

      {selectedModule && (
        <div
          style={{
            position: "absolute",
            top: descPos.top,
            left: descPos.left,
            transform: "translateX(-50%)",
            background: "#ffffff",
            padding: "12px 14px",
            borderRadius: "10px",
            maxWidth: "250px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            fontSize: "0.9rem",
            color: "#334155",
          }}
        >
          {descriptions[selectedModule]}
        </div>
      )}

<style>{`
  .module-box {
    opacity: 1 !important;
    transform: translate(-50%, -50%) scale(1) !important;
    transition: all 0.3s ease-in-out;
  }
  .module-box:hover {
    background: #2563eb !important;
    color: #fff !important;
    transform: translate(-50%, -50%) scale(1.05) !important;
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3) !important;
  }
  .module-description {
    background: #f9fafb;
    border-left: 4px solid #2563eb;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.85rem;
  }

  @media (max-width: 1023px) {
    h1 { font-size: 1.5rem !important; text-align: center; }
    p { font-size: 0.9rem !important; text-align: center; }
    .product-card { width: 90% !important; max-width: 200px; padding: 12px !important; margin: 0 auto; }
    .product-card h3 { font-size: 0.9rem !important; margin: 5px 0 !important; }
    .product-card p { font-size: 0.75rem !important; margin: 5px 0 !important; }
    .product-img { width: 60px !important; height: 60px !important; margin-bottom: -10px !important; }

    /* Modules container: vertical column at bottom */
    .modules-container {
      display: flex;
      flex-direction: column; 
      justify-content: flex-start;
      align-items: center; 
      padding: 0 5%; /* <-- prevent overflow on sides */
      position: static !important;
      width: 100%;
      box-sizing: border-box;
      margin: 20px 0 0 0;
    }

    .module-box {
      width: 100%; /* take full container width */
      max-width: 350px; /* prevent being too wide */
      margin: 5px 0; 
      font-size: 0.75rem !important;
      background: #fff !important;
      border: 1px solid #e2e8f0 !important;
      box-sizing: border-box;
      transform: none !important;
      position: static !important;
    }

    .module-box:hover { 
      transform: none !important; 
      background: #2563eb !important; 
      color: #fff !important; 
    }

    .module-description { font-size: 0.75rem !important; }
  }

  @media (min-width: 1024px) {
    .module-box { 
      opacity: 1 !important; 
      transform: translate(-50%, -50%) scale(1) !important; 
      transition: all 0.3s ease-in-out; 
    }
    .module-box:hover { 
      background: #2563eb !important; 
      color: #fff !important; 
      transform: translate(-50%, -50%) scale(1.05) !important; 
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3) !important; 
    }
  }
`}</style>

      
    </section>
  );
}
