import { Linkedin, Facebook, Instagram, Twitter, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <style>{`
        footer {
          background: #111827;
          color: #9ca3af;
          padding: 60px 20px 30px 20px;
          font-family: 'Inter', sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: auto;
          gap: 40px;
        }

        .footer-column {
          flex: 1 1 250px;
          min-width: 220px;
        }

        .footer-column h2,
        .footer-column h3 {
          color: #fff;
          margin-bottom: 15px;
        }

        .footer-column p {
          color: #d1d5db;
          line-height: 1.6;
          margin: 5px 0;
          font-size: 0.95rem;
        }

        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .social-icons a {
          width: 38px;
          height: 38px;
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
          margin-top: 40px;
          border-top: 1px solid #374151;
          padding-top: 20px;
          font-size: 0.85rem;
          color: #6b7280;
          text-align: center;
        }

        /* Large Tablets / iPad */
        @media (max-width: 1024px) {
          .footer-container {
            gap: 30px;
          }
          .footer-column p { font-size: 0.9rem; }
          .social-icons a { width: 36px; height: 36px; }
        }

        /* Tablets and iPads */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-column {
            min-width: 100%;
          }
          .footer-column p { font-size: 0.88rem; }
          .social-icons {
            justify-content: center;
            gap: 10px;
          }
          .social-icons a { width: 34px; height: 34px; }
        }

        /* Mobile */
        @media (max-width: 480px) {
          footer {
            padding: 40px 15px 20px 15px;
          }
          .footer-column h2 { font-size: 1.2rem; }
          .footer-column h3 { font-size: 1rem; }
          .footer-column p { font-size: 0.8rem; }
          .social-icons a { width: 32px; height: 32px; }
          .footer-bottom { font-size: 0.75rem; }
        }
      `}</style>

      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h2>Revatix IT Solutions</h2>
          <p>
            Innovative IT solutions provider delivering cutting-edge products and services.
            Helping businesses scale efficiently with technology.
          </p>
        </div>

        {/* About Us */}
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Revatix Solutions is a leading provider of innovative IT services.</p>
          <p>We specialize in enterprise software development.</p>
          <p>Our mission is to empower businesses with cutting-edge technology.</p>
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
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="phone">
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





