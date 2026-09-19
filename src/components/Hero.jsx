import heroBg from "../assets/hero-banner.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero-scrim" />

      <div className="hero-content">
        <p className="hero-kicker">Erbil's own street kitchen</p>
        <h1 className="hero-title">
          Burgers built
          <br />
          like a tag —
          <br />
          bold &amp; unmistakable
        </h1>
        <p className="hero-sub">
          Flame-grilled patties, hand-dressed toppings, and fries in a box
          that looks as loud as it tastes. No shortcuts, no stencils.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="btn btn-solid">
            See the menu
          </a>
          <a href="#find-us" className="btn btn-glass">
            Find a location
          </a>
        </div>
      </div>

      <a href="#story" className="hero-scroll" aria-label="Scroll to story">
        <span className="hero-scroll-dot" />
      </a>
    </section>
  );
}
