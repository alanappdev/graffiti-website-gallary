import burgerImg from "../assets/gallery/burger-fries-1.png";
import comboImg from "../assets/gallery/family-combo.png";
import ingredientsImg from "../assets/gallery/ingredients.png";
import "./Menu.css";

const ITEMS = [
  {
    img: burgerImg,
    name: "The Original Tag",
    desc: "Double smash patty, cheddar, pickles, house sauce, toasted sesame bun.",
    price: "$8.50",
  },
  {
    img: comboImg,
    name: "Family Wall Meal",
    desc: "Two burgers, a shareable fry box, and drinks — built for the crew.",
    price: "$21",
  },
  {
    img: ingredientsImg,
    name: "Build Your Own",
    desc: "Start from a single flame-grilled patty and stack it your way.",
    price: "$6.90",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="menu-head">
        <p className="section-kicker">On the menu</p>
        <h2 className="menu-title">Pick your piece</h2>
      </div>

      <div className="menu-grid">
        {ITEMS.map((item) => (
          <article className="menu-card" key={item.name}>
            <div className="menu-card-media">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="menu-card-body">
              <div className="menu-card-row">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
