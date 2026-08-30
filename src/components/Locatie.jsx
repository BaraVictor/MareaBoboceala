import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { VENUE_ADDRESS } from "../config";

export default function Locatie() {
  return (
    <section id="locatie" className="section section--dark">
      <div className="section__inner locatie">
        <Reveal>
          <span className="eyebrow eyebrow--light">Locație</span>
          <h2 className="section__title section__title--light">
            Petrecerea are loc la Mecano
          </h2>
          <p className="locatie__text">
            Ultima zi a Marii Boboceli se încheie în forță la <strong>Mecano</strong>,
            unul dintre cele mai cunoscute cluburi din oraș. Acces liber pentru
            boboci, deschis tuturor studenților care vor să sărbătorească alături
            de noi.
          </p>
          <div className="locatie__row">
            <MapPin size={20} />
            <span>
              {VENUE_ADDRESS} <em>(placeholder — actualizează adresa exactă)</em>
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="map-placeholder">
            <MapPin size={40} />
            <span>Hartă Mecano</span>
            <small>Înlocuiește cu embed Google Maps</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
