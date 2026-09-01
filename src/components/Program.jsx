import { useState } from "react";
import Reveal from "./Reveal";
import { PROGRAM_DAYS } from "../config";
import "../styles/_program.scss"; 
import bgImage from "../assets/IMG_6914.png"; // <-- IMPORTANT: Importă imaginea ta aici (schimbă numele/calea cu poza ta)

export default function Program() {
  const [active, setActive] = useState(0);
  const day = PROGRAM_DAYS[active];

  return (
    <section id="program" className="program-section">
      
      {/* 1. CONTAINERUL PENTRU IMAGINEA DE FUNDAL ȘI OVERLAY */}
      <div 
        className="program-section__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="program-section__inner">
        <Reveal>
          <div className="program-section__header">
            <span className="program-section__eyebrow">// PROGRAMUL OFICIAL</span>
            <h2 className="program-section__title">
              Cele 3 zile, <br className="break-mobile" />
              pas cu pas.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="program-container">
            {/* Tab-urile / Butonasele de sus (Ziua 1, 2, 3) */}
            <div className="program-tabs">
              {PROGRAM_DAYS.map((d, i) => (
                <button
                  key={d.key}
                  data-day={i} 
                  className={`program-tab ${active === i ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="program-tab__hex">{d.key}</span>
                  <span className="program-tab__label">{d.label}</span>
                </button>
              ))}
            </div>

            {/* Panoul principal cu sticlă cinematică în care afișăm orarul zilei */}
            <div className="program-panel">
              <div className="program-panel__glow"></div>
              <h3 className="program-panel__title">{day.title}</h3>
              <ul className="program-panel__list">
                {day.details.map((line, index) => (
                  <li key={index} className="program-panel__item">
                    <span className="program-panel__bullet"></span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}