import { useEffect, useState } from "react";
// import { useTheme } from "../ui/ThemeProvider";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


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
  const [scrolled, setScrolled] = useState(false);
  // const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <motion.div 
            className="logo"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('/')}
          >
            <img src="/src/assets/images/microline-logo.png" alt="Microline India" />
          </motion.div>

        {/* Desktop Navigation */}
        <div className="nav-right">
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

            <div className="rightmost">
          <button className="theme-toggle" aria-label="Toggle theme">
              {<Sun size={18} />}
            </button>
          </div>
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