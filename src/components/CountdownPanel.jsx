import { useCountdown } from "../hooks/useCountdown";
import { useReveal } from "../hooks/useReveal"; 
import { EVENT_START } from "../config";

// 1. AICI ALEGI POZA! Schimbă numele fișierului cu poza pe care o vrei pe fundal.
import poza from "../assets/20260320_195239.png";

// 2. Importăm caracatița
import caracatita from "../assets/caracatita.png";

export default function CountdownPanel() {
  const { days, hours, minutes, seconds, done } = useCountdown(EVENT_START);
  const [ref, visible] = useReveal();

  const units = [
    { label: "ZILE", value: days },
    { label: "ORE", value: hours },
    { label: "MIN", value: minutes },
    { label: "SEC", value: seconds },
  ];

  return (
    <section 
      className="countdown-section"
      /* Aplicăm poza aleasă și filtrul întunecat direct aici */
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.85) 0%, rgba(2, 6, 23, 0.98) 100%), url(${poza})`
      }}
    >
      <div 
        ref={ref} 
        className={`countdown-panel ${visible ? "is-visible" : ""}`}
      >
        <div className="countdown-panel__glass">
          
          <img 
            src={caracatita} 
            alt="Mascota OSFIIR" 
            className="countdown-panel__mascot" 
          />

          <div className="countdown-panel__header">
            <div className="countdown-panel__dots">
              <span className="countdown-panel__dot" />
              <span className="countdown-panel__dot" />
              <span className="countdown-panel__dot" />
            </div>
            <span className="countdown-panel__subtitle">
              {done ? "// EVENIMENT ÎN DESFĂȘURARE" : "// NUMĂRĂTOARE INVERSĂ ACTIVĂ"}
            </span>
          </div>
          
          <div className="countdown-panel__grid">
            {units.map((u) => (
              <div key={u.label} className="countdown-panel__unit">
                <span className="countdown-panel__number">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="countdown-panel__label">{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}