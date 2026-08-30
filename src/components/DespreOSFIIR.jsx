import Reveal from "./Reveal";
import CornerWave from "./decorative/CornerWave";
import logoMark from "../assets/logo-mark.png";

export default function DespreOSFIIR() {
  return (
    <section id="osfiir" className="section section--dark">
      <CornerWave color="#39A54B" className="section__wave" opacity={0.14} />
      <div className="section__inner osfiir">
        <Reveal>
          <img src={logoMark} alt="" className="osfiir__gear" aria-hidden="true" />
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow eyebrow--light">Organizatorul</span>
          <h2 className="section__title section__title--light">
            OSFIIR — Organizația Studenților Facultății de Inginerie Industrială
            și Robotică
          </h2>
          <p className="locatie__text">
            Suntem echipa care ține integrarea bobocilor, evenimentele și energia
            facultății în priză tot anul. Marea Boboceală e proiectul nostru
            preferat: locul unde bobocii devin parte din gașcă, nu doar din
            facultate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
