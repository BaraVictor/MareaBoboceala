import { Mail } from "lucide-react";
import { SOCIALS } from "../config";
import logoFull from "../assets/logo-full.png";

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

/* Iconiță de TikTok cu bara verticală îngroșată și plină */
function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-4.45v13.67a2.89 2.89 0 1 1-2.5-2.86v-3.75a6.64 6.64 0 1 0 6.25 6.61V9.58a8.21 8.21 0 0 0 4.47 1.36v-3.4c-.65 0-1.34-.3-1.55-.85z" />
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
          <a href={SOCIALS.tiktok || "https://www.tiktok.com/@o.s.f.i.i.r?is_from_webapp=1&sender_device=pc"} target="_blank" rel="noreferrer" aria-label="TikTok">
            <TikTokIcon size={20} />
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