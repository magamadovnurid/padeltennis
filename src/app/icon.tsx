import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
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
            "radial-gradient(circle at 20% 18%, rgba(227,100,61,0.26), transparent 30%), linear-gradient(145deg, #0f2630 0%, #123847 58%, #0c7c59 100%)",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 356,
            height: 356,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 28%, #f4ff9c 0%, #d8f05d 34%, #bad236 68%, #9fb72d 100%)",
            boxShadow:
              "inset 0 18px 42px rgba(255,255,255,0.35), inset 0 -18px 36px rgba(27,48,15,0.18), 0 28px 70px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 52,
              left: 30,
              width: 160,
              height: 250,
              border: "18px solid #f7f8ea",
              borderRight: "none",
              borderRadius: "50%",
              transform: "rotate(9deg)",
              opacity: 0.96,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 52,
              right: 30,
              width: 160,
              height: 250,
              border: "18px solid #f7f8ea",
              borderLeft: "none",
              borderRadius: "50%",
              transform: "rotate(-9deg)",
              opacity: 0.96,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              boxShadow: "inset 0 0 0 6px rgba(255,255,255,0.12)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
