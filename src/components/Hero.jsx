import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

import image1 from "../assets/IMG_6980.JPG";
import image2 from "../assets/IMG_6914.png";
import image3 from "../assets/IMG_6898.png";
import image4 from "../assets/IMG_6894.png";
import image5 from "../assets/20260320_195239.png";

// Acum avem 5 imagini de înaltă rezoluție
const BACKGROUND_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5
];

// Timpul pe care o poză stă pe ecran (8 secunde)
const SLIDE_DURATION = 8000;

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play care se resetează când schimbi imaginea
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [currentImage]);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  // Logica pentru Swipe pe mobil
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  return (
    <section id="top" className="hero">
      {/* 1. Caruselul */}
      <div 
        className="hero__bg-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {BACKGROUND_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Background ${index + 1}`}
            className={`hero__bg-image ${index === currentImage ? "is-active" : ""}`}
            draggable="false"
          />
        ))}
        <div className="hero__bg-overlay"></div>
      </div>

      {/* 2. Conținutul Text */}
      <div className="hero__content">
        <Reveal>
          <h1 className="hero__title">
            MAREA <br />
            <span className="hero__title-accent">BOBOCEALĂ</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="hero__sub">
            3 zile. Prieteni noi, jocuri, energie și o petrecere pe cinste.
            Se activează protocolul de distracție.
          </p>
        </Reveal>
      </div>

      {/* 3. Butoane navigare Desktop (Stânga / Dreapta) */}
      <button className="hero__nav-btn hero__nav-btn--left" onClick={prevSlide} aria-label="Înapoi">
        <ChevronLeft size={32} />
      </button>
      <button className="hero__nav-btn hero__nav-btn--right" onClick={nextSlide} aria-label="Înainte">
        <ChevronRight size={32} />
      </button>

      {/* 4. Indicatorii de progres (Biluțele) */}
      <div className="hero__pagination">
        {BACKGROUND_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === currentImage ? "is-active" : ""}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Sari la imaginea ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}