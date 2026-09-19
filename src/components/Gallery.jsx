import burgerFries from "../assets/gallery/burger-fries-1.png";
import grill from "../assets/gallery/grill.png";
import ingredients from "../assets/gallery/ingredients.png";
import familyCombo from "../assets/gallery/family-combo.png";
import promo1 from "../assets/gallery/promo-1.png";
import promoHero from "../assets/gallery/promo-hero.png";
import "./Gallery.css";

const TILES = [
  { img: familyCombo, size: "big", caption: "Family Wall Meal" },
  { img: grill, size: "wide", caption: "On the flame" },
  { img: promoHero, size: "small", caption: "Now open" },
  { img: burgerFries, size: "wide", caption: "The Original Tag" },
  { img: ingredients, size: "small", caption: "Built fresh, not frozen" },
  { img: promo1, size: "wide", caption: "Loud on purpose" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-head">
        <p className="section-kicker">The wall</p>
        <h2 className="gallery-title">Shots from the shop</h2>
      </div>

      <div className="gallery-grid">
        {TILES.map((tile, i) => (
          <figure className={`gallery-tile gt-${tile.size}`} key={i}>
            <img src={tile.img} alt={tile.caption} loading="lazy" />
            <figcaption>{tile.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
