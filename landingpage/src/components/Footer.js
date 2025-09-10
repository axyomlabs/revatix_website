import { Linkedin, Facebook, Instagram, Twitter, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <style>{`
        footer {
          background: #111827;
          padding: 60px 20px 30px 20px;
          color: #9ca3af;
          text-align: center;
        }
        footer h2, footer h3 {
          color: #ffffff;
          margin-bottom: 15px;
        }
        footer p {
          color: #d1d5db;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 5px 0;
        }
        .footer-center {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .footer-section {
          max-width: 300px;
          text-align: left;
        }
        .social-icons {
          margin-top: 10px;
          display: flex;
          gap: 12px;
          justify-content: flex-start;
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
        .social-icons a.whatsapp:hover { background: #25d366; }
        .copyright {
          margin-top: 30px;
          font-size: 0.85rem;
          color: #6b7280;
          text-align: center;
          border-top: 1px solid #374151;
          padding-top: 20px;
        }
        @media (max-width: 768px) {
          .footer-center {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }
          .footer-section {
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>

      <div className="footer-center">
        {/* Company Info */}
        <div className="footer-section">
          <h2>Revatix IT Solutions</h2>
          <p>
            We are an innovative IT solutions provider delivering cutting-edge 
            products and services. Our mission is to help businesses scale 
            efficiently with technology.
          </p>
        </div>

        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>
          
            <p>Revatix Solutions is a leading provider of innovative IT services.</p>
            <p>We specialize enterprise software development.</p>
            <p>Our mission is to empower businesses with cutting-edge technology.</p>
        </div>

        {/* Contact Info & Social Media */}
        <div className="footer-section">
          <h3>Contact Us</h3>
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
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <Phone size={20} color="white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <Instagram size={20} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Revatix IT Solutions. All rights reserved.
      </div>
    </footer>
  );
}


