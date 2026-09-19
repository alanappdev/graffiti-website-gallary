import grillImg from "../assets/gallery/grill.png";
import "./Story.css";

export default function Story() {
  return (
    <section id="story" className="story">
      <div className="story-inner">
        <div className="story-media">
          <img src={grillImg} alt="A beef patty searing over open flame" />
          <div className="story-media-glow" />
        </div>

        <div className="story-copy">
          <p className="section-kicker">The story</p>
          <h2 className="story-title">
            Started on a wall,
            <br />
            finished on the grill.
          </h2>
          <p className="story-text">
            Graffiti Burger started with one idea: fast food doesn't have to
            look or taste like everyone else's. Every patty is flame-grilled
            to order, every bun is toasted to a real char, and every wall in
            the shop is covered by local artists — nothing about this place
            is off the shelf.
          </p>
          <p className="story-text">
            We treat the menu the same way we treat the walls: bold colors,
            no filler, and something worth stopping for.
          </p>

          <div className="story-stats">
            <div>
              <span className="story-stat-num">100%</span>
              <span className="story-stat-label">Flame-grilled</span>
            </div>
            <div>
              <span className="story-stat-num">0</span>
              <span className="story-stat-label">Stencils used</span>
            </div>
            <div>
              <span className="story-stat-num">1</span>
              <span className="story-stat-label">Way to build a burger — right</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
