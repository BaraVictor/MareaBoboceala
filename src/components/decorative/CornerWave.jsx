export default function CornerWave({
  color = "currentColor",
  className = "",
  flip = false,
  opacity = 1,
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        pointerEvents: "none",
        opacity,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <path
        d="M0,0 L600,0 L600,200 C440,260 400,360 300,420 C190,486 110,520 0,600 Z"
        fill={color}
      />
    </svg>
  );
}
