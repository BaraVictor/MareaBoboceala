import { useState, useEffect, useRef } from "react";
import logoFull from "../assets/logo-full.png";

const SESSION_KEY = "osfiir-intro-shown";

export default function Intro() {
  const [phase, setPhase] = useState(() => {
    if (typeof window === "undefined") return "done";
    return sessionStorage.getItem(SESSION_KEY) ? "done" : "loading";
  });
  const [progress, setProgress] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  // Faza de loading — bara de progres "lichidă" din interiorul logo-ului OSFIIR
  useEffect(() => {
    if (phase !== "loading") return;

    if (reducedMotion.current) {
      setProgress(100);
      const t = setTimeout(() => setPhase("zoom"), 200);
      return () => clearTimeout(t);
    }

    const duration = 2500;
    const stepTime = 20;
    const steps = duration / stepTime;
    let current = 0;

    const id = setInterval(() => {
      current += 1;
      const t = current / steps;
      const eased = 1 - Math.pow(1 - t, 2);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (current >= steps) {
        clearInterval(id);
        setTimeout(() => setPhase("zoom"), 300);
      }
    }, stepTime);

    return () => clearInterval(id);
  }, [phase]);

  // Faza de zoom + fade — logo-ul se mărește, tot intro-ul dispare, site-ul apare
  useEffect(() => {
    if (phase !== "zoom") return;
    const fadeTime = reducedMotion.current ? 200 : 750;
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setPhase("done");
    }, fadeTime);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`intro ${phase === "zoom" ? "intro--zoom" : ""}`}>
      <div className="intro__loading">
        <div className="intro__logo-wrap">
          <img src={logoFull} alt="" className="intro__logo-outline" aria-hidden="true" />
          <div
            className="intro__logo-mask"
            style={{ WebkitMaskImage: `url(${logoFull})`, maskImage: `url(${logoFull})` }}
          >
            <div className="intro__logo-liquid" style={{ height: `${progress}%` }} />
          </div>
        </div>
        <div className="intro__progress-track">
          <div className="intro__progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="intro__progress-label">{progress}%</span>
      </div>
    </div>
  );
}
