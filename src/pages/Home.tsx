// Home.tsx
interface HomeProps {
  onNavigate: (page: string) => void;
}

const productCategories = [
  { title: "Microwave Test Systems", img: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Antennas", img: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "RF & Microwave Components", img: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Waveguides & Accessories", img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "Laboratory Setups", img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { title: "PCB & Fabrication Facilities", img: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const clients = [
  { name: "DRDO", abbr: "DRDO" },
  { name: "NIT", abbr: "NIT" },
  { name: "TATA Consultancy Services", abbr: "TCS" },
  { name: "Sisir Radar", abbr: "SISIR RADAR" },
  { name: "VIT", abbr: "VIT" },
  { name: "IEM", abbr: "IEM" },
];

const whyChoose = [
  { icon: "fa-microchip", title: "Advanced Technology", desc: "Cutting-edge microwave & RF solutions." },
  { icon: "fa-check-circle", title: "Quality Assurance", desc: "Finest quality products with rigorous testing." },
  { icon: "fa-users", title: "Experienced Team", desc: "Skilled professionals with deep domain expertise." },
  { icon: "fa-globe", title: "End to End Support", desc: "From conception to technology development." },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <p className="text-accent" style={{ fontWeight: 600, letterSpacing: "2px", marginBottom: "0.5rem" }}>
              Welcome to Microline India
            </p>
            <h1>
              Innovating Microwave <br />
              &amp; RF Technology <br />
              <span className="highlight">Since 1997</span>
            </h1>
            <p>
              Delivering advanced Microwave and RF solutions with innovation, precision and reliability.
            </p>
            <div className="hero-actions">
              <button onClick={() => onNavigate("products")} className="btn btn-primary">
                Explore Products <i className="fas fa-arrow-right"></i>
              </button>
              <button onClick={() => onNavigate("contact")} className="btn btn-outline">
                Contact Us
              </button>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Microwave Technology"
            />
          </div>
        </div>

        {/* Stats Bar (pinned at bottom) */}
        <div className="stats-bar">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <i className="fas fa-trophy"></i>
                <div>
                  <strong>27+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <div>
                  <strong>500+</strong>
                  <span>Satisfied Customers</span>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-microchip"></i>
                <div>
                  <strong>In-house</strong>
                  <span>Design & Development</span>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-cogs"></i>
                <div>
                  <strong>Custom</strong>
                  <span>Solutions & Projects</span>
                </div>
              </div>
              <div className="stat-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Pan India</strong>
                  <span>Support & Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <p className="text-accent" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", marginBottom: "0.5rem" }}>
              What We Offer
            </p>
            <h2>Our <span className="text-accent">Product Categories</span></h2>
          </div>
          <div className="grid grid-cols-2 grid-cols-3 grid-cols-6">
            {productCategories.map((cat) => (
              <div key={cat.title} className="card" onClick={() => onNavigate("products")} style={{ cursor: "pointer" }}>
                <img src={cat.img} alt={cat.title} className="card-img" style={{ height: "150px" }} />
                <div className="card-body">
                  <h3>{cat.title}</h3>
                  <button className="btn btn-outline" style={{ width: "100%", fontSize: "0.7rem", padding: "0.5rem" }}>
                    View Products <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Esteemed <span className="text-accent">Clients & Partners</span></h2>
          </div>
          <div className="client-logos">
            {clients.map((c) => (
              <div key={c.name} className="text-center">
                <div className="client-logo-circle">
                  <span>{c.abbr}</span>
                </div>
                <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", color: "var(--gray-600)" }}>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose <span className="text-accent">Microline India?</span></h2>
          </div>
          <div className="grid grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="feature-card">
                <i className={`fas ${item.icon}`}></i>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-3" style={{ gap: "2rem", marginBottom: "2rem" }}>
            <div className="footer-contact">
              <i className="fas fa-phone-alt" style={{ color: "var(--primary-accent-light)", marginRight: "0.75rem" }}></i>
              <div>
                <h4>Call Us</h4>
                <p>+91 98310 46924</p>
              </div>
            </div>
            <div className="footer-contact">
              <i className="fas fa-envelope" style={{ color: "var(--primary-accent-light)", marginRight: "0.75rem" }}></i>
              <div>
                <h4>Email Us</h4>
                <p>sales@microlineindia.com</p>
              </div>
            </div>
            <div className="footer-contact">
              <i className="fas fa-map-marker-alt" style={{ color: "var(--primary-accent-light)", marginRight: "0.75rem" }}></i>
              <div>
                <h4>Address</h4>
                <p>Microline India, Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Microline India. All rights reserved.</p>
            <button onClick={() => onNavigate("contact")} className="btn btn-primary" style={{ marginTop: "1rem" }}>
              Contact Us
            </button>
          </div>
        </div>
      </footer>


    </>
  );
}