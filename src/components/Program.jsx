import { useState } from "react";
import Reveal from "./Reveal";
import { PROGRAM_DAYS } from "../config";

export default function Program() {
  const [active, setActive] = useState(0);
  const day = PROGRAM_DAYS[active];

  return (
    <section id="program" className="section">
      <div className="section__inner">
        <Reveal>
          <span className="eyebrow">Program</span>
          <h2 className="section__title">Cele 3 zile, pas cu pas</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="tabs">
            {PROGRAM_DAYS.map((d, i) => (
              <button
                key={d.key}
                className={`tab ${active === i ? "tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="tab__hex">{d.key}</span>
                {d.label}
              </button>
            ))}
          </div>

          <div className="tab-panel">
            <h3>{day.title}</h3>
            <ul>
              {day.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
