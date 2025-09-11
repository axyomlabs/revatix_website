import React, { useState } from "react";
import productLogo from "../Assets/isp.png";
import logoImage from "../Assets/logo.png";

export default function Header() {
  const [showProduct, setShowProduct] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const toggleProduct = () => setShowProduct(!showProduct);
  const toggleContact = () => setShowContact(!showContact);
  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <>
      <header>
        <style>{`
          header {
            width: 100%;
            height: 5%;
            padding: 18px 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(2, 2, 2, 0.64);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }

          .logo {
            display: flex;
            align-items: center;
          }

          /* Bigger logo with glow */
          .logo img {
            height: 50%;     
            max-height: 35%;
            width: 20%;         
            filter: drop-shadow(0 0 6px rgba(20, 0, 204, 0.64))
                    drop-shadow(0 0 10px rgba(5, 11, 12, 0.85))
                    drop-shadow(0 0 14px rgba(111, 255, 243, 0.61));
            transition: filter 0.3s ease;
          }
          .logo img:hover {
            filter: drop-shadow(0 0 8px rgba(32, 32, 32, 0.85))
                    drop-shadow(0 0 12px rgba(32, 32, 32, 0.85))
                    drop-shadow(0 0 16px rgba(32, 32, 32, 0.85));
          }

          nav { display: flex; align-items: center; margin-right: 50px; }
          nav ul { list-style: none; display: flex; gap: 25px; margin: 0; padding: 0; }
          nav li {
            cursor: pointer; color: white; font-weight: 500;
            transition: color 0.3s ease; padding: 5px 10px;
            border-radius: 5px; text-align: center; white-space: nowrap;
          }
          nav li:hover { color: #f59e0b; background: rgba(255,255,255,0.1); }
          nav li.explore {
            background: #3b82f6; color: #fff; font-weight: 600;
            padding: 6px 14px; border-radius: 8px;
          }
          nav li.explore:hover { background: #2563eb; }

          @media(max-width: 768px) {
            header { flex-direction: column; padding: 12px 20px; }
            nav { margin-right: 0; margin-top: 12px; }
            nav ul { flex-direction: column; gap: 10px; }
          }

          .popup {
            margin: 100px auto 0 auto;
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            width: 360px;
            text-align: center;
            position: relative;
            animation: fadeIn 0.3s ease-in-out;
          }

          .popup img { width: 80px; height: 80px; margin-bottom: 15px; }
          .popup h3 { margin-bottom: 10px; font-size: 1.3rem; color: #111827; }
          .popup p { color: #4b5563; font-size: 1rem; margin-bottom: 15px; }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 1.4rem;
            font-weight: bold;
            color: red;
            background: transparent;
            border: none;
            cursor: pointer;
            transition: color 0.2s ease;
          }
          .close-btn:hover { color: #f59e0b; }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>

        {/* Logo */}
        <div className="logo">
          <img src={logoImage} alt="Company Logo" />
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={toggleAbout}>About</li>
            <li onClick={toggleContact}>Contact</li>
            <li className="explore" onClick={toggleProduct}>Explore</li>
          </ul>
        </nav>
      </header>

      {/* Popups */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200 }}>
        {showProduct && (
          <div className="popup">
            <button className="close-btn" onClick={toggleProduct}>×</button>
            <img src={productLogo} alt="Product Logo" />
            <h3>🚀 Product Showcase</h3>
            <p>Explore our cutting-edge IT solutions for modern businesses.</p>
          </div>
        )}

        {showContact && (
          <div className="popup">
            <button className="close-btn" onClick={toggleContact}>×</button>
            <h3>📞 Contact Us</h3>
            <p>Phone: +91 99251 32277</p>
            <p>Email: info@revatix.com</p>
            <p>Address: Bhuj</p>
          </div>
        )}

        {showAbout && (
          <div className="popup">
            <button className="close-btn" onClick={toggleAbout}>×</button>
            <h3>ℹ️ About Us</h3>
            <p>Revatix Solutions is a leading provider of innovative IT services.</p>
            <p>We specialize in enterprise software development.</p>
            <p>Our mission is to empower businesses with cutting-edge technology.</p>
          </div>
        )}
      </div>
    </>
  );
}
