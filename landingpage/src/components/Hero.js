import React, { useState, useRef, useEffect } from "react";
import productLogo from "../Assets/isp.png";

export default function Hero() {
  const [showModules, setShowModules] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [descPos, setDescPos] = useState({ top: 0, left: 0 });
  const moduleRefs = useRef([]);
  const cardRef = useRef(null);

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

  const [positions, setPositions] = useState([]);

  const calculatePositions = () => {
    const card = cardRef.current;
    if (!card) return [];
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const centerY = rect.top + rect.height / 2 + window.scrollY;

    if (window.innerWidth > 768) {
      // Desktop layout
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

    // Mobile positions not used for flex layout
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "radial-gradient(circle at center, #613dff, #7125ff, #3500f3)",
        color: "white",
        padding: "20px",
        textAlign: "center",
        overflow: "visible",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", opacity: 1 }}>
        Welcome to Revatix IT Solutions
      </h1>
      <p style={{ maxWidth: "600px", marginBottom: "30px", fontSize: "1.2rem", opacity: 1 }}>
        Empowering businesses with innovation.
      </p>

      {/* Product Card */}
      <div
        ref={cardRef}
        className="product-card"
        style={{
          background: "linear-gradient(135deg, #eafbff, #e3e4f0)",
          color: "#111",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(255,255,255,0.9)",
          width: "280px",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <img
          src={productLogo}
          alt="Product"
          className="product-img"
          style={{ width: "80px", height: "80px", marginBottom: "-20px" }}
        />
        <h3>Our Product Showcase</h3>
        <p>Discover our innovative IT solutions for modern businesses.</p>
        <button
          onClick={() => setShowModules(!showModules)}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            background: "#4d7bf8",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Modules
        </button>
      </div>

      {/* Modules */}
      {showModules && (
        <div className="modules-container">
          {positions.map((pos, i) => (
            <div
              key={i}
              ref={(el) => (moduleRefs.current[i] = el)}
              onClick={() => handleModuleClick(modules[i])}
              className="module-box"
              style={{
                position: "absolute",
                top: pos.y,
                left: pos.x,
                transform: "translate(-50%, -50%) scale(0.5)",
                opacity: 0,
                background: "linear-gradient(135deg, #64b4ff, #592b74)",
                padding: "10px 14px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                color: "white",
                width: "140px",
                transition: `all 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55) ${i * 0.1}s`,
              }}
            >
              <p style={{ margin: 0, fontWeight: 600 }}>{modules[i]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Module Description */}
      {selectedModule && (
        <div
          style={{
            position: "absolute",
            top: descPos.top,
            left: descPos.left,
            transform: "translateX(-50%)",
            background: "rgba(48,3,85,0.85)",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "250px",
          }}
        >
          {descriptions[selectedModule]}
        </div>
      )}

      <style>{`
        .module-box {
          opacity: 1 !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }

        /* Mobile phone layout */
        @media (max-width: 767px) {
          h1 { font-size: 1.5rem !important; }
          p { font-size: 0.9rem !important; }
          .product-card {
            width: 160px !important;
            padding: 12px !important;
          }
          .product-card h3 { font-size: 0.9rem !important; margin: 5px 0 !important; }
          .product-card p { font-size: 0.75rem !important; margin: 5px 0 !important; }
          .product-img { width: 60px !important; height: 60px !important; margin-bottom: -10px !important; }

          .modules-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 360px;
            margin: 10px auto 0 auto;
            position: static !important;
          }

          .module-box {
            position: static !important;
            transform: scale(1) !important;
            width: 48% !important;
            margin: 1% !important;
            font-size: 0.75rem !important;
            text-align: center;
          }

          .module-box:nth-child(7) {
            width: 48% !important;
            margin: 1% auto !important;
          }
        }

        /* iPad Air / tablet layout */
        @media (min-width: 768px) and (max-width: 1024px) {
          h1 { font-size: 2rem !important; }
          p { font-size: 1rem !important; }
          .product-card {
            width: 220px !important;
            padding: 15px !important;
          }
          .product-card h3 { font-size: 1.1rem !important; }
          .product-card p { font-size: 0.9rem !important; }
          .product-img { width: 70px !important; height: 70px !important; margin-bottom: -15px !important; }

          .modules-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 480px;
            margin: 15px auto 0 auto;
            position: static !important;
          }

          .module-box {
            position: static !important;
            transform: scale(1) !important;
            width: 30% !important;
            margin: 1% !important;
            font-size: 0.85rem !important;
            text-align: center;
          }

          .module-box:nth-child(7) {
            width: 30% !important;
            margin: 1% auto !important;
          }
        }
      `}</style>
    </section>
  );
}
