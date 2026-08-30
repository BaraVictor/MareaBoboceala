import { useCountdown } from "../hooks/useCountdown";
import { EVENT_START } from "../config";

export default function CountdownPanel() {
  const { days, hours, minutes, seconds, done } = useCountdown(EVENT_START);

  const units = [
    { label: "ZILE", value: days },
    { label: "ORE", value: hours },
    { label: "MIN", value: minutes },
    { label: "SEC", value: seconds },
  ];

  return (
    <div className="countdown-panel">
      <div className="countdown-panel__header">
        <span className="countdown-panel__dot" />
        <span className="countdown-panel__dot" />
        <span className="countdown-panel__dot" />
        <span className="countdown-panel__title">
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
  );
}
