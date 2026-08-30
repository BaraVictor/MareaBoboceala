import { Users, Gamepad2, PartyPopper } from "lucide-react";
import Reveal from "./Reveal";
import CornerWave from "./decorative/CornerWave";
import { DESPRE_ITEMS } from "../config";

const ICONS = [
  <Users size={28} />,
  <Gamepad2 size={28} />,
  <PartyPopper size={28} />,
];

const ICON_COLORS = ["#F28D28", "#39A54B", "#3F62B2"];

export default function Despre() {
  return (
    <section id="despre" className="section section--dark">
      <CornerWave color="#F28D28" className="section__wave" opacity={0.14} />
      <div className="section__inner">
        <Reveal>
          <span className="eyebrow eyebrow--light">Despre eveniment</span>
          <h2 className="section__title section__title--light">
            Un eveniment. Trei zile. Zero plictiseală.
          </h2>
        </Reveal>

        <div className="grid-3">
          {DESPRE_ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="card card--dark">
                <div className="card__icon" style={{ background: ICON_COLORS[i] }}>
                  {ICONS[i]}
                </div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
