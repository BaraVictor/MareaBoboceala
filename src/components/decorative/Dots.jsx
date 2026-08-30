export default function Dots({ className = "" }) {
  return (
    <div className={`dots ${className}`} aria-hidden="true">
      <span className="dots__circle dots__circle--orange" />
      <span className="dots__circle dots__circle--green" />
      <span className="dots__circle dots__circle--blue" />
    </div>
  );
}
