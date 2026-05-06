import { useState } from "react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Products", page: "products" },
  { label: "Services", page: "services" },
  { label: "Applications", page: "applications" },
  { label: "Achievements", page: "achievements" },
  { label: "Resources", page: "resources" },
  { label: "Contact Us", page: "contact" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" onClick={() => onNavigate("home")}>
          MICROLINE INDIA
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => onNavigate(link.page)}
                className={currentPage === link.page ? "active" : ""}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Request Quote button */}
        <div className="desktop-cta">
          <button className="btn btn-primary" onClick={() => onNavigate("contact")}>
            Request Quote
          </button>
        </div>

        {/* Mobile toggle button */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => {
                  onNavigate(link.page);
                  setMenuOpen(false);
                }}
                className={currentPage === link.page ? "active-mobile" : ""}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="btn btn-primary"
          onClick={() => {
            onNavigate("contact");
            setMenuOpen(false);
          }}
        >
          Request Quote
        </button>
      </div>
    </nav>
  );
}