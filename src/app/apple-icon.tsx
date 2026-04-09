import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(227,100,61,1), rgba(12,124,89,1))",
          color: "white",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: -4,
          borderRadius: 40,
        }}
      >
        P
      </div>
    ),
    size,
  );
}
