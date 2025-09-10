import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [showContact, setShowContact] = useState(false);

  const handleProductClick = () => {
  
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    setShowContact(true);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header 
        onProductClick={handleProductClick} 
        onContactClick={handleContactClick} 
      />
      <Hero onProductClick={handleProductClick} />

      {/* Contact Section (Popup only) */}
      {showContact && (
        <div className="popup">
          <h3>📞 Contact Us</h3>
          <p>Reach out to us for inquiries, support, or partnerships.</p>
          <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="text" placeholder="Your Name" required style={{ padding: "8px" }}/>
            <input type="email" placeholder="Your Email" required style={{ padding: "8px" }}/>
            <textarea placeholder="Your Message" rows="4" required style={{ padding: "8px" }}></textarea>
            <button type="submit">Send</button>
          </form>
          <button onClick={() => setShowContact(false)} style={{ marginTop: "10px" }}>Close</button>
        </div>
      )}

      <Footer />
    </div>
  );
}
















