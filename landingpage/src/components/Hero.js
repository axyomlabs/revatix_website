import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import productLogo from "../Assets/isp.png";

export default function Hero() {
  const [showModules, setShowModules] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [descPos, setDescPos] = useState({ top: 0, left: 0 });
  const moduleRefs = useRef([]);
  const cardRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const modules = useMemo(
    () => [
      "CRM",
      "PR-069",
      "Radius",
      "Inventory Management",
      "Accounting and Reports",
      "Network Monitoring",
      "HR Module",
    ],
    []
  );

  const descriptions = useMemo(
    () => ({
      CRM: "Streamlines customer interactions, manages leads, and enhances client engagement within ISP 360.",
      "PR-069": "Automates device provisioning, monitoring, and customer connectivity workflows efficiently.",
      Radius: "Handles authentication and access control for ISP users, ensuring secure and smooth connectivity.",
      "Inventory Management": "Keeps track of ISP equipment, modems, and network assets with real-time updates.",
      "Accounting and Reports": "Generates billing, invoices, and performance reports for accurate financial insights.",
      "Network Monitoring": "Monitors network uptime, traffic, and performance metrics for proactive issue resolution.",
      "HR Module": "Manages employee records, attendance, and payroll operations for smooth HR workflows.",
    }),
    []
  );

  const calculatePositions = useCallback(() => {
    const card = cardRef.current;
    if (!card) return [];
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const centerY = rect.top + rect.height / 2 + window.scrollY;

    if (window.innerWidth >= 1024) {
      const heroHeight = window.innerHeight - 120; // hero height excluding padding/header
      const spacing = Math.min(150, heroHeight / 4); // auto spacing
      return [
        { x: centerX - 350, y: centerY - spacing },
        { x: centerX - 350, y: centerY },
        { x: centerX - 350, y: centerY + spacing },
        { x: centerX + 350, y: centerY - spacing },
        { x: centerX + 350, y: centerY },
        { x: centerX + 350, y: centerY + spacing },
        { x: centerX, y: centerY + spacing * 1.5 },
      ];
    }
    return modules.map(() => ({ x: 0, y: 0 }));
  }, [modules]);

  useEffect(() => {
    setPositions(calculatePositions());
    const handleResize = () => setPositions(calculatePositions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculatePositions]);

  useEffect(() => {
    if (selectedModule !== null) {
      const index = modules.indexOf(selectedModule);
      const modRef = moduleRefs.current[index];
      if (modRef) {
        const rect = modRef.getBoundingClientRect();
        setDescPos({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left + rect.width / 2 + window.scrollX,
        });
      }
    }
  }, [selectedModule, showModules, modules]);

  const handleModuleClick = (module) => {
    setSelectedModule((prev) => (prev === module ? null : module));
  };

  const rem = (px) => `${px / 16}rem`;

  return (
    <section
      style={{
        width: "100%",
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: "Roboto, sans-serif",
        background: "linear-gradient(to bottom, #ffffff, #f5f7fa)",
        padding:
          window.innerWidth < 480 ? rem(40) + " " + rem(12) : rem(60) + " " + rem(20),
        textAlign: "center",
        color: "#111",
        overflow: "visible",
        transform: window.innerWidth < 1024 ? "translateX(-4%)" : "none",
      }}
    >
      {/* Hero Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <h1
          style={{
            fontSize: rem(40),
            marginBottom: rem(10),
            color: "#1e293b",
            textAlign: "center",
            maxWidth: window.innerWidth < 480 ? "90%" : rem(600),
            wordWrap: "break-word",
          }}
        >
          Welcome to Revatix IT Solutions
        </h1>
        <p
          style={{
            maxWidth: window.innerWidth < 480 ? "90%" : rem(600),
            marginBottom: rem(30),
            fontSize: rem(18),
            color: "#475569",
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          Empowering businesses with innovation.
        </p>

        {/* Product Card */}
        <div
          ref={cardRef}
          className="product-card"
          style={{
            background: "#ffffff",
            color: "#111",
            padding: rem(20),
            borderRadius: rem(12),
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            width: window.innerWidth >= 1024 ? rem(280) : "90%",
            maxWidth: rem(250),
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <img
            src={productLogo}
            alt="Product"
            style={{
              width: window.innerWidth >= 1024 ? rem(80) : rem(60),
              height: window.innerWidth >= 1024 ? rem(80) : rem(60),
              marginBottom: rem(-20),
            }}
          />
          <h3
            style={{
              color: "#1e3a8a",
              marginBottom: rem(6),
              fontSize: window.innerWidth >= 1024 ? rem(19) : rem(14),
            }}
          >
            Our Product Showcase
          </h3>
          <p
            style={{
              fontSize: window.innerWidth >= 1024 ? rem(14) : rem(12),
              color: "#475569",
            }}
          >
            Discover our innovative IT solutions for modern businesses.
          </p>
          <button
            onClick={() => setShowModules(!showModules)}
            style={{
              marginTop: rem(12),
              padding: rem(10) + " " + rem(18),
              border: "none",
              borderRadius: rem(6),
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: rem(16),
            }}
          >
            Modules
          </button>
        </div>
      </div>

      {/* Modules */}
      {showModules && (
        <div
          className="modules-container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          {positions.map((pos, i) => (
            <div
              key={i}
              ref={(el) => (moduleRefs.current[i] = el)}
              onClick={() => handleModuleClick(modules[i])}
              className="module-box"
              style={{
                position: window.innerWidth >= 1024 ? "absolute" : "relative",
                top: pos.y,
                left: pos.x,
                transform:
                  window.innerWidth >= 1024 ? "translate(-50%, -50%) scale(0.55)" : "none",
                opacity: window.innerWidth >= 1024 ? 0 : 1,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                padding: rem(6) + " " + rem(8),
                borderRadius: rem(8),
                textAlign: "center",
                cursor: "pointer",
                color: "#1e293b",
                width: rem(130),
                maxWidth: rem(130),
                margin: window.innerWidth >= 1024 ? 0 : rem(4) + " auto",
                boxSizing: "border-box",
                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                transition: window.innerWidth >= 1024 ? `all 0.6s ease ${i * 0.1}s` : "none",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              <p style={{ margin: 0, fontWeight: 500, fontSize: rem(12) }}>{modules[i]}</p>

              {/* Mobile description */}
              {selectedModule === modules[i] && window.innerWidth < 1024 && (
                <div
                  style={{
                    marginTop: rem(6),
                    background: "#ffffff",
                    padding: rem(8) + " " + rem(10),
                    borderRadius: rem(8),
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    fontSize: rem(12),
                    color: "#334155",
                    textAlign: "center",
                  }}
                >
                  {descriptions[selectedModule]}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Desktop description */}
      {selectedModule && window.innerWidth >= 1024 && (
        <div
          style={{
            position: "absolute",
            top: descPos.top,
            left: descPos.left,
            transform: "translateX(-50%)",
            background: "#ffffff",
            padding: rem(12) + " " + rem(14),
            borderRadius: rem(10),
            maxWidth: rem(250),
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            fontSize: rem(13),
            color: "#334155",
            zIndex: 20,
            textAlign: "center",
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
        @media (max-width: 1023px) {
          .modules-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 5%;
            position: static !important;
            width: 100%;
            margin-top: ${rem(10)};
            transform: translateX(1.5%);
          }
          .module-box {
            width: ${rem(120)} !important;
            max-width: ${rem(120)} !important;
            margin: ${rem(4)} 0 !important;
            font-size: ${rem(12)} !important;
            position: relative !important;
            transform: none !important;
          }
          .module-box:hover { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
