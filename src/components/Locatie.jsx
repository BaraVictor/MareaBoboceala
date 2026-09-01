import { useState } from "react";
import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { LOCATII_ITEMS } from "../config";
import "../styles/_locatie.scss";

export default function Locatie() {
  const [activeTab, setActiveTab] = useState(0); 
  const current = LOCATII_ITEMS[activeTab];

  return (
    <section id="locatie" className="locatie-section">
      <div className="locatie-section__inner">
        
        {/* Antetul: Titlul în stânga, Butonul în dreapta */}
        <div className="locatie-header-row">
          <div className="locatie-header-titles">
            <span className="locatie-section__eyebrow">// LOCATIE</span>
            <h2 className="locatie-section__main-title">Unde suntem?</h2>
          </div>

          <div className={`locatie-switcher state-${activeTab}`}>
            {LOCATII_ITEMS.map((item, index) => (
              <button
                key={index}
                className={`locatie-switch-btn ${activeTab === index ? "is-active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {index === 0 ? "Facultate" : "Mecano"}
              </button>
            ))}
          </div>
        </div>

        {/* CUTIA MARE: Aplică starea 0 (serios) sau starea 1 (violet + animație de petrecere) */}
        <div className={`locatie-card-box state-${activeTab}`}>
          
          {/* Partea stângă: Așezată perfect pe verticală */}
          <div className="locatie-left-column">
            <Reveal key={activeTab}>
              <div className="locatie-content">
                <div className="locatie-content__top">
                  <span className="locatie-card__eyebrow">{current.tag}</span>
                  <h3 className="locatie-card__title">{current.title}</h3>
                </div>
                
                <p className="locatie__text">
                  {current.description}
                </p>

                <div className="locatie__row">
                  <MapPin size={20} className="locatie__pin-icon" />
                  <span>
                    {current.address} <em>({current.subAddress})</em>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Partea dreaptă: Harta */}
          <div className="map-wrapper">
            <Reveal delay={120} key={`map-${activeTab}`}>
              <div className="map-container">
                <iframe
                  title={current.title}
                  src={current.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}