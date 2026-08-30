import { useState, useEffect } from "react";

export function useCountdown(target) {
  const [time, setTime] = useState(() => target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setTime(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const clamped = Math.max(time, 0);
  const days = Math.floor(clamped / 86400000);
  const hours = Math.floor((clamped % 86400000) / 3600000);
  const minutes = Math.floor((clamped % 3600000) / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);

  return { days, hours, minutes, seconds, done: time <= 0 };
}
