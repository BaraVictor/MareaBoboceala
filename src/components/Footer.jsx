import { Mail } from "lucide-react";
import { SOCIALS } from "../config";
import logoFull from "../assets/logo-full.png";

/* Lucide a eliminat iconițele de brand (Instagram, Facebook etc.) din v1.0
   din motive legale — le definim local, ca SVG-uri simple, în același stil
   line-art ca restul iconițelor din site. */
function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={logoFull} alt="OSFIIR" className="footer__logo-img" />

        <div className="footer__links">
          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon size={20} />
          </a>
          <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon size={20} />
          </a>
          <a href={`mailto:${SOCIALS.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} OSFIIR — Marea Boboceală. Toate drepturile
          rezervate.
        </p>
      </div>
    </footer>
  );
}
