import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

// Importăm cele 5 poze (fără caracatiță)
import img1 from "../assets/20260320_195239.png";
import img2 from "../assets/IMG_6894.png";
import img3 from "../assets/IMG_6898.png";
import img4 from "../assets/IMG_6914.png";
import img5 from "../assets/IMG_6980.JPG";

const slides = [
  { id: 1, img: img1, title: "Ediția Trecută - Moment 1" },
  { id: 2, img: img2, title: "Ediția Trecută - Moment 2" },
  { id: 3, img: img3, title: "Ediția Trecută - Moment 3" },
  { id: 4, img: img4, title: "Ediția Trecută - Moment 4" },
  { id: 5, img: img5, title: "Ediția Trecută - Moment 5" },
];

export default function Galerie() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalTime = 5000;
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / intervalTime) * 100;
      if (currentProgress <= 100) {
        setProgress(currentProgress);
      }
    }, 50);

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalTime);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (distance < -threshold) {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  return (
    <section id="galerie" className="galerie-section">
      <div className="galerie-section__inner">
        <Reveal>
          <div className="galerie-header">
            <span className="galerie-section__eyebrow">// GALERIE</span>
            <h2 className="galerie-section__main-title">Momente din edițiile trecute</h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="treasure-carousel-wrapper">
            {/* Glow galben fin, elegant */}
            <div className="treasure-glow-effect"></div>

            <div className="treasure-carousel-container">
              {/* Săgeata stângă în afara cutiei principale sau pe marginea largă */}
              <button className="treasure-arrow-btn treasure-arrow-left" onClick={handlePrev} aria-label="Anteriorul">
                <ChevronLeft size={24} />
              </button>

              <div 
                className="treasure-carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Căsuța interioară pentru poză */}
                <div className="treasure-viewport-box">
                  <div className="treasure-viewport">
                    {slides.map((slide, index) => (
                      <div
                        key={slide.id}
                        className={`treasure-slide ${index === currentIndex ? "is-active" : ""}`}
                      >
                        <img src={slide.img} alt={slide.title} />
                        <div className="treasure-caption">
                          <span>{slide.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Punctulețele și pilula cu bară de progres */}
                <div className="treasure-dots-container">
                  {slides.map((_, index) => {
                    const isActive = index === currentIndex;
                    return (
                      <button
                        key={index}
                        className={`treasure-dot ${isActive ? "is-active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Mergi la slide-ul ${index + 1}`}
                      >
                        {isActive && (
                          <div 
                            className="treasure-progress-bar" 
                            style={{ width: `${progress}%` }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Săgeata dreaptă */}
              <button className="treasure-arrow-btn treasure-arrow-right" onClick={handleNext} aria-label="Următorul">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}