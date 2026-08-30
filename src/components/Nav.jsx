import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoFullBlue from "../assets/logo-full-blue.png";

const LINKS = [
  ["Despre", "#despre"],
  ["Program", "#program"],
  ["Locație", "#locatie"],
  ["Galerie", "#galerie"],
  ["OSFIIR", "#osfiir"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificăm dacă intro-ul a fost deja afișat în această sesiune
    const hasSeenIntro = sessionStorage.getItem("osfiir-intro-shown");
    
    if (!hasSeenIntro) {
      // Dacă e prima dată, ascundem navbar-ul și îl afișăm după terminarea intro-ului
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2800); // 2800ms acoperă cele 2.5s + tranziția de zoom
      return () => clearTimeout(timer);
    } else {
      // Dacă utilizatorul a mai navigat pe site/a dat refresh, apare instant
      setIsVisible(true);
    }
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Am adăugat o clasă dinamică `nav--hidden` când isVisible este false
    <header className={`nav glass-effect ${!isVisible ? "nav--hidden" : ""}`}>
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => go("#top")} aria-label="Acasă">
          <img src={logoFullBlue} alt="OSFIIR" className="nav__logo-img" />
        </button>

        <nav className="nav__links">
          {LINKS.map(([label, href]) => (
            <button key={href} onClick={() => go(href)} className="nav__link">
              {label}
            </button>
          ))}
        </nav>

        <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Meniu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`nav__mobile glass-effect ${open ? "is-open" : ""}`}>
        {LINKS.map(([label, href]) => (
          <button key={href} onClick={() => go(href)} className="nav__mobile-link">
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}