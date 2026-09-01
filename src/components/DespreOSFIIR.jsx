import Reveal from "./Reveal";
import logoMark from "../assets/logo-mark.png";
import "../styles/_despreOsfiir.scss";

export default function DespreOSFIIR() {
  return (
    <section id="osfiir" className="osfiir-section">
      <div className="osfiir-section__inner">
        <div className="osfiir-card-box">
          
          {/* Partea stângă: Logoul animat / roata dințată */}
          <div className="osfiir-left-column">
            <Reveal>
              <div className="osfiir-logo-wrapper">
                <img src={logoMark} alt="OSFIIR Logo" className="osfiir__gear" />
              </div>
            </Reveal>
          </div>

          {/* Partea dreaptă: Textul, eticheta // și titlul */}
          <div className="osfiir-right-column">
            <Reveal delay={100}>
              <div className="osfiir-content">
                <span className="osfiir-section__eyebrow">// ORGANIZATORUL</span>
                <h2 className="osfiir-section__main-title">
                  OSFIIR - Organizația Studenților Facultății de Inginerie Industrială și Robotică
                </h2>
                <p className="osfiir__text">
                  Suntem asociația care ține integrarea bobocilor, evenimentele și energia 
                  facultății în priză tot anul. Marea Boboceală e proiectul nostru 
                  preferat: locul unde bobocii devin parte din gașcă, nu doar din facultate.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}