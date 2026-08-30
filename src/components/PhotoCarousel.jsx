import { useState, useEffect, useCallback } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_PLACEHOLDERS as SLIDES } from "../config";

export default function PhotoCarousel({ autoPlayInterval = 4000 }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (!autoPlayInterval) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return (
    <div className="photo-carousel glass">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          className={`photo-carousel__slide ${i === index ? "photo-carousel__slide--active" : ""}`}
          style={{
            background: `linear-gradient(135deg, ${slide.colorFrom} 0%, ${slide.colorTo} 100%)`,
          }}
        >
          <Camera size={34} />
          <span>{slide.label}</span>
        </div>
      ))}

      <button className="photo-carousel__nav photo-carousel__nav--prev" onClick={prev} aria-label="Poza anterioară">
        <ChevronLeft size={22} />
      </button>
      <button className="photo-carousel__nav photo-carousel__nav--next" onClick={next} aria-label="Poza următoare">
        <ChevronRight size={22} />
      </button>

      <div className="photo-carousel__dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            className={`photo-carousel__dot ${i === index ? "photo-carousel__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Mergi la ${slide.label}`}
          />
        ))}
      </div>
    </div>
  );
}
