import React, { useState, useRef } from "react";
import productLogo from "../Assets/isp.png";
import logoImage from "../Assets/logo.png";

export default function Header() {
  const [popup, setPopup] = useState({ type: null, top: 0, left: 0, visible: false });
  const buttonsRef = useRef({});

  const handleClick = (type) => {
    const btn = buttonsRef.current[type];
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const popupWidth = Math.min(window.innerWidth * 0.85, 300);
    const popupHeight = 220;

    let left = rect.left + rect.width / 2;
    left = Math.max(left, popupWidth / 2 + 8);
    left = Math.min(left, window.innerWidth - popupWidth / 2 - 8);

    let top = rect.bottom + window.scrollY + 8;
    const maxTop = window.scrollY + window.innerHeight - popupHeight - 8;
    top = Math.min(top, maxTop);

    setPopup({ type, top, left, visible: true });
  };

  const closePopup = () => setPopup(prev => ({ ...prev, visible: false }));

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

          .logo img { height: clamp(35px,5vw,60px); width:auto; }

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

          .popup {
            position: fixed;
            transform: translateX(-50%) translateY(-10px);
            opacity: 0;
            background: white;
            padding: clamp(12px,3vw,20px);
            width: clamp(220px,85%,300px);
            max-height: 80vh;
            overflow-y: auto;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            z-index: 200;
            text-align: center;
            transition: all 0.35s ease;
          }

          .popup.show { transform: translateX(-50%) translateY(0); opacity: 1; }

          .popup img { width: clamp(50px,15vw,70px); height: clamp(50px,15vw,70px); margin-bottom: 12px; }
          .popup h3 { font-size: clamp(1rem,3.5vw,1.2rem); margin-bottom: 8px; color:#111827; }
          .popup p { font-size: clamp(0.8rem,2.5vw,0.95rem); margin-bottom: 6px; color:#4b5563; }

          .close-btn {
            position: absolute;
            top: 8px;
            right: 10px;
            font-size: 1.3rem;
            color: red;
            border: none;
            background: transparent;
            cursor: pointer;
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
            <li ref={el => buttonsRef.current.home = el} onClick={() => scrollToSection("home")}>Home</li>
            <li ref={el => buttonsRef.current.services = el} onClick={() => scrollToSection("services")}>Services</li>
            <li ref={el => buttonsRef.current.about = el} onClick={() => handleClick("about")}>About</li>
            <li ref={el => buttonsRef.current.contact = el} onClick={() => handleClick("contact")}>Contact</li>
            <li ref={el => buttonsRef.current.explore = el} className="explore" onClick={() => handleClick("explore")}>Explore</li>
          </ul>
        </nav>
      </header>

      {popup.type && (
        <div
          className={`popup ${popup.visible ? "show" : ""}`}
          style={{ top: popup.top + "px", left: popup.left + "px" }}
        >
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
          </>}
        </div>
      )}
    </>
  );
}
