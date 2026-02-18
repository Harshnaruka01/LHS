function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>L.H.S</h3>
          <p>Creating custom websites that match your business needs and goals.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#process">Process</a></li>
            <li><a href="#templates">Templates</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Portfolio Websites</li>
            <li>E-Commerce Sites</li>
            <li>Business Websites</li>
            <li>Institute Websites</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: harsh@example.com</p>
          <p>Phone: +91 72218 39023</p>
          <div className="social-links">
            <a href="https://www.instagram.com/harsh._.naruka/" aria-label="Instagram">i</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="https://www.linkedin.com/in/harsh-966490297/" aria-label="LinkedIn">in</a>
            <a href="https://github.com/Harshnaruka01" aria-label="GitHub">g</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 L.H.S. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
