
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Utensils,
} from "lucide-react";
import "./App.css";

const dishes = [
  {
    name: "Creamy Mushroom Pasta",
    category: "Chef's Special",
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700",
    description: "Fresh pasta tossed in a rich creamy sauce.",
  },
  {
    name: "Garden Fresh Salad",
    category: "Healthy Choice",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
    description: "Seasonal greens, fresh vegetables and herbs.",
  },
  {
    name: "Classic Italian Pizza",
    category: "Popular",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700",
    description: "Handcrafted pizza with fresh ingredients.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2 Guests",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReservation = (e) => {
    e.preventDefault();

    const message = `Hello Olive & Thyme! I would like to reserve a table.
Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Guests: ${form.guests}`;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="website">
      <nav className="navbar">
        <a href="#home" className="logo">
          olive<span>&</span>thyme.
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a href="#reservation" className="nav-book">
            Book a Table <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">A LITTLE TASTE OF HAPPINESS</span>

            <h1>
              Good food.
              <br />
              <em>Beautiful</em> moments.
            </h1>

            <p>
              Thoughtfully prepared dishes, fresh ingredients and a warm
              atmosphere. Come hungry, leave happy.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="primary-btn">
                Explore Menu <ArrowUpRight size={17} />
              </a>

              <a href="#about" className="text-btn">
                Our Story
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200"
              alt="Beautiful restaurant dining table"
            />

            <div className="image-note">
              <span>01 / 03</span>
              <span>Made with love, served with care.</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>FRESH INGREDIENTS</span>
            <span>MADE WITH PASSION</span>
            <span>GOOD FOOD, GOOD MOOD</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900"
              alt="Restaurant interior"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">OUR STORY</span>

            <h2>
              More than food,
              <br />
              it's an <em>experience.</em>
            </h2>

            <p>
              At Olive & Thyme, we believe every meal deserves a little
              magic. Our kitchen brings together fresh ingredients,
              thoughtful recipes and the joy of sharing good food.
            </p>

            <a href="#contact" className="underlined-link">
              Get to know us <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FROM OUR KITCHEN</span>
              <h2>
                Made to be <em>enjoyed.</em>
              </h2>
            </div>

            <p>
              Simple ingredients. Thoughtful cooking. Memorable flavours.
            </p>
          </div>

          <div className="dish-grid">
            {dishes.map((dish) => (
              <article className="dish-card" key={dish.name}>
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  <span>{dish.category}</span>
                </div>

                <div className="dish-info">
                  <div>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </div>

                  <strong>{dish.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <span className="eyebrow">A REASON TO GATHER</span>

          <h2>
            "The best memories
            <br />
            are made around <em>the table."</em>
          </h2>

          <a href="#reservation" className="light-btn">
            Save Your Seat <ArrowUpRight size={17} />
          </a>
        </section>

        <section className="gallery section" id="gallery">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A GLIMPSE INSIDE</span>
              <h2>
                Little moments, <em>big flavours.</em>
              </h2>
            </div>
          </div>

          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
              alt="Restaurant dining area"
            />

            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
              alt="Restaurant table"
            />

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
              alt="Restaurant food presentation"
            />
          </div>
        </section>

        <section className="reservation section" id="reservation">
          <div className="reservation-content">
            <span className="eyebrow">YOUR TABLE IS WAITING</span>

            <h2>
              Let's make it a <em>date.</em>
            </h2>

            <p>
              Good food tastes even better together. Send us your reservation
              request on WhatsApp.
            </p>

            <div className="contact-detail">
              <Clock size={18} />
              <span>Monday – Sunday, 11 AM – 11 PM</span>
            </div>

            <div className="contact-detail">
              <MapPin size={18} />
              <span>Your Restaurant Address, Patna</span>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleReservation}>
            <h3>Reserve your table</h3>

            <label>Your name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />

            <label>Phone number</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
            />

            <label>Reservation date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              required
            />

            <label>Number of guests</label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
            >
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6+ Guests</option>
            </select>

            <button type="submit" className="primary-btn form-btn">
              Request Reservation <ArrowUpRight size={17} />
            </button>

            <small>
              This demo sends your request through WhatsApp.
            </small>
          </form>
        </section>

        <section className="contact section" id="contact">
          <div>
            <span className="eyebrow">COME SAY HELLO</span>

            <h2>
              We'd love to <em>meet you.</em>
            </h2>
          </div>

          <div className="contact-columns">
            <div>
              <MapPin />
              <h3>Find us</h3>
              <p>Your Restaurant Address, Patna, Bihar</p>
            </div>

            <div>
              <Phone />
              <h3>Call us</h3>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <Utensils />
              <h3>Opening hours</h3>
              <p>Every day · 11 AM – 11 PM</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          olive<span>&</span>thyme.
        </a>

        <p>Good food. Beautiful moments.</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>

        <div className="footer-bottom">
          <span>© 2026 Olive & Thyme. Demo website.</span>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
