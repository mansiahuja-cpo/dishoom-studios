export default function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(circle at 30% 40%, rgba(245, 224, 0, 0.06), transparent 50%)",
        animation: "glow-drift 12s ease-in-out infinite",
      }}
    />
  );
}