import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dishoom Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 80,
            fontWeight: 500,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Dishoom Studio
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: 24,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Brand · Strategy · Design
        </div>
      </div>
    ),
    { ...size }
  );
}
