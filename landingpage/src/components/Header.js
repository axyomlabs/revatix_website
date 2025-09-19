import React, { useState } from "react";
import productLogo from "../Assets/isp.png";
import logoImage from "../Assets/logo.png";

export default function Header() {
  const [popup, setPopup] = useState({ type: null, visible: false });

  const handleClick = (type) => {
    setPopup({ type, visible: true });
  };

  const closePopup = () => setPopup({ type: null, visible: false });

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <style>{`
          header {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(2,2,2,0.64);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            padding: 0 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }

          .logo img { 
            width: clamp(120px, 15vw, 180px);
            height: clamp(160px, 9vw, 100px);
            object-fit: contain;
          }

          nav {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex: 1;
            overflow-x: auto;
            scrollbar-width: none;
            padding-right: 15px;
          }
          nav::-webkit-scrollbar { display: none; }

          nav ul {
            display: flex;
            gap: clamp(8px, 2vw, 14px);
            margin: 0;
            padding: 0;
            list-style: none;
            white-space: nowrap;
          }

          nav li {
            cursor: pointer;
            color: white;
            font-weight: 500;
            font-size: clamp(10px, 1.8vw, 14px);
            padding: 4px 6px;
            border-radius: 4px;
            flex-shrink: 0;
          }

          nav li:hover { color: #f59e0b; background: rgba(255,255,255,0.1); }

          nav li.explore {
            background: #3b82f6;
            color: #fff;
            font-weight: 600;
            padding: 3px 6px;
            min-width: 60px;
            flex-shrink: 0;
            margin-left: 4px;
            text-align: center;
          }
          nav li.explore:hover { background: #2563eb; }

          /* Full-page popup overlay */
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 200;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .popup-overlay.show {
            opacity: 1;
            pointer-events: all;
          }

          .popup {
            background: white;
            padding: 32px;
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            text-align: center;
            position: relative;
            box-shadow: 0 10px 25px rgba(0,0,0,0.35);
            font-family: 'Roboto', sans-serif;
            font-size: 0.85rem;
          }

          .popup img { width: clamp(50px,15vw,70px); height: clamp(50px,15vw,70px); margin-bottom: 14px; }
          .popup h3 { font-size: 1.2rem; margin-bottom: 10px; color:#111827; }
          .popup p { margin-bottom: 8px; color:#4b5563; display: flex; align-items: center; justify-content: center; gap: 8px; }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 12px;
            font-size: 1.4rem;
            color: red;
            border: none;
            background: transparent;
            cursor: pointer;
          }

          .whatsapp-link {
            color: #25D366;
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          @media (max-width: 480px) {
            nav li { font-size: 10px; padding: 2px 4px; }
            nav li.explore { 
              padding: 2px 5px; 
              font-size: 9px; 
              min-width: 50px; 
              margin-left: 2px; 
            }
          }
        `}</style>

        <div className="logo">
          <img src={logoImage} alt="Logo"/>
        </div>

        <nav>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => handleClick("about")}>About</li>
            <li onClick={() => handleClick("contact")}>Contact</li>
            <li className="explore" onClick={() => handleClick("explore")}>Explore</li>
          </ul>
        </nav>
      </header>

      {/* Full-page overlay popup */}
      {popup.type && (
        <div className={`popup-overlay ${popup.visible ? "show" : ""}`} onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>

            {popup.type === "explore" && <>
              <img src={productLogo} alt="Product"/>
              <h3>🚀 Product Showcase</h3>
              <p>Explore our cutting-edge IT solutions for modern businesses.</p>
            </>}

            {popup.type === "about" && <>
              <h3>ℹ️ About Us</h3>
              <p>Revatix Solutions is a leading provider of innovative IT services.</p>
              <p>We specialize in enterprise software development.</p>
              <p>Our mission is to empower businesses with cutting-edge technology.</p>
            </>}

            {popup.type === "contact" && <>
              <h3>📞 Contact Us</h3>
              <p>Phone: +91 99251 32277</p>
              <p>Email: info@revatix.com</p>
              <p>Address: Bhuj</p>
              <p>
                <a 
                  href="https://wa.me/919925132277" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-link"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    style={{ width: "30px", height: "30px" }}
                  />
                  <span style={{ marginTop: "-10px" }}>WhatsApp</span>
                </a>
              </p>
            </>}
          </div>
        </div>
      )}
    </>
  );
}
