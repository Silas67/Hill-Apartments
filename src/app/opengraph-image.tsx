import { ImageResponse } from "next/og";

// Generated at build time, so there is no large static OG asset to ship and
// nothing to keep in sync by hand. Next serves this at /opengraph-image.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "OG Winners Homes — Real Estate in Abuja";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0e252e",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#2088c4",
          }}
        >
          Real Estate
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 24,
          }}
        >
          OG Winners Homes
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 28,
            color: "#fdf6ec",
          }}
        >
          Buy, sell and invest across Abuja
        </div>
        <div
          style={{
            marginTop: 48,
            height: 8,
            width: 220,
            background: "#2088c4",
          }}
        />
      </div>
    ),
    size
  );
}
