import { Users, Gamepad2, PartyPopper } from "lucide-react";
import Reveal from "./Reveal";
import { DESPRE_ITEMS } from "../config";
import "../styles/_despre.scss"; 

const ICONS = [
  <Users size={32} color="#ffffff" />,
  <Gamepad2 size={32} color="#ffffff" />,
  <PartyPopper size={32} color="#ffffff" />,
];

// Un strop de culoare premium pentru fiecare zi (Portocaliu, Verde Cyan, Mov)
const CARD_COLORS = [
  { glow: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #ea580c)" },
  { glow: "#10b981", gradient: "linear-gradient(135deg, #10b981, #059669)" },
  { glow: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)" },
];

export default function Despre() {
  return (
    <section id="despre" className="despre-section">
      <div className="despre-section__inner">
        <Reveal>
          <div className="despre-section__header">
            <span className="despre-section__eyebrow">// DESPRE EVENIMENT</span>
            <h2 className="despre-section__title">
              Trei zile. <br className="break-mobile" /> Zero plictiseală.
            </h2>
          </div>
        </Reveal>

        <div className="despre-grid">
          {DESPRE_ITEMS.map((it, i) => {
            const cardColor = CARD_COLORS[i];
            return (
              <Reveal key={it.title} delay={i * 100}>
                <div 
                  className="despre-card"
                  // Transmitere variabile CSS pentru glow personalizat per card
                  style={{ 
                    "--card-color": cardColor.glow,
                    "--card-glow": `${cardColor.glow}20`,      // Glow fin și subtil (opacitate 20%)
                    "--card-glow-hover": `${cardColor.glow}50` // Glow amplu și puternic la hover (opacitate 50%)
                  }}
                >
                  <div 
                    className="despre-card__icon-wrap"
                    style={{ 
                      background: cardColor.gradient,
                      boxShadow: `0 8px 24px ${cardColor.glow}60`
                    }}
                  >
                    {ICONS[i]}
                  </div>
                  
                  {/* Eticheta "ZIUA X" dinamică și titlul separat */}
                  <span className="despre-card__day">{it.day}</span>
                  <h3 className="despre-card__title">{it.title}</h3>
                  <p className="despre-card__text">{it.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}