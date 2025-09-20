import { Linkedin, Facebook, Instagram, Twitter, Phone } from "lucide-react"; 

export default function Footer() {
  return (
    <footer>
      <style>{`
        footer {
          background: #111827;
          color: #9ca3af;
          padding: 40px 20px 15px 20px;
          font-family: 'Inter', sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1200px;
          margin: auto;
          gap: 2rem; /* two lines of space */
          text-align: center;
        }

        .footer-column {
          flex: 1 1 250px;
          min-width: 220px;
        }

        .footer-column h2,
        .footer-column h3 {
          color: #fff;
          margin-bottom: 6px;
        }

        .footer-column p {
          color: #d1d5db;
          line-height: 1.3;
          margin: 2px 0;
          font-size: 0.9rem;
        }

        .social-icons {
          display: flex;
          gap: 6px;
          margin-top: 4px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social-icons a {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icons a:hover { transform: scale(1.15); }
        .social-icons a.facebook:hover { background: #1877f2; }
        .social-icons a.twitter:hover { background: #1da1f2; }
        .social-icons a.linkedin:hover { background: #2563eb; }
        .social-icons a.instagram:hover { background: #e1306c; }
        .social-icons a.phone:hover { background: #22c55e; }

        .footer-bottom {
          margin-top: 15px;
          border-top: 1px solid #374151;
          padding-top: 10px;
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
        }

        /* Tablets and small desktops */
        @media (max-width: 1024px) {
          .footer-container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }
          .footer-column {
            width: auto;
          }
        }

        /* Mobile: wrap into 2 rows */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }
          .footer-column {
            flex: 1 1 45%; /* two columns per row */
            margin-bottom: 1.5rem;
          }
        }

        /* Very small screens (<480px) */
        @media (max-width: 480px) {
          .footer-container {
            flex-direction: column;
            gap: 1rem; /* slight vertical spacing */
          }
          .footer-column {
            flex: 1 1 100%; /* each section takes full width */
            margin-bottom: 1rem;
          }
          .footer-column h2, .footer-column h3 { margin: 1px 0; line-height: 1.1; }
          .footer-column p { margin: 0; line-height: 1.1; font-size: 0.78rem; }
          .social-icons a { width: 26px; height: 26px; }
          .footer-bottom { font-size: 0.65rem; margin-top: 3px; }
        }
      `}</style>

      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h2>Revatix IT Solutions</h2>
          <p>Innovative IT solutions provider delivering cutting-edge products and services.</p>
          <p>Helping businesses scale efficiently with technology.</p>
        </div>

        {/* About Us with CRM & ERP mention */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Revatix IT Solutions is a parent company delivering innovative IT services.</p>
          <p>We offer products focused on CRM and ERP systems.</p>
          <p>Our goal: empower businesses with technology that streamlines operations and boosts productivity.</p>
        </div>

        {/* Contact Info & Social */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>📧 support@revatix.com</p>
          <p>📞 +91 99251 32277</p>
          <p>📍 Bhuj</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
              <Facebook size={20} color="white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <Twitter size={20} color="white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
              <Linkedin size={20} color="white" />
            </a>
            <a href="https://wa.me/+919925132277" target="_blank" rel="noopener noreferrer" className="phone">
              <Phone size={20} color="white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <Instagram size={20} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Revatix IT Solutions. All rights reserved.
      </div>
    </footer>
  );
} 
