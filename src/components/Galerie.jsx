import Reveal from "./Reveal";
import PhotoCarousel from "./PhotoCarousel";

export default function Galerie() {
  return (
    <section id="galerie" className="section">
      <div className="section__inner">
        <Reveal>
          <span className="eyebrow">Galerie</span>
          <h2 className="section__title">Momente din edițiile trecute</h2>
        </Reveal>

        <Reveal delay={80}>
          <PhotoCarousel />
        </Reveal>
      </div>
    </section>
  );
}
