import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="find-us" className="footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        <div className="footer-cta-card">
          <p className="section-kicker">Find us</p>
          <h2 className="footer-title">Come get one while it's hot.</h2>
          <p className="footer-text">
            Open daily, 11am – 11pm. Walk in, call ahead, or order for
            delivery.
          </p>

          <div className="footer-details">
            <div>
              <span className="footer-label">Address</span>
              <span>Erbil, Iraq</span>
            </div>
            <div>
              <span className="footer-label">Phone</span>
              <span>+964 000 000 000</span>
            </div>
            <div>
              <span className="footer-label">Hours</span>
              <span>11:00 – 23:00 daily</span>
            </div>
          </div>

          <a href="#top" className="btn btn-solid footer-btn">
            Order now
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <img src={logo} alt="Graffiti Burger" />
          <span>Graffiti Burger</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Graffiti Burger. All rights reserved.</p>
      </div>
    </footer>
  );
}
