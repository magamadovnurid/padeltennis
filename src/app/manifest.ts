import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Padel Next Point",
    short_name: "Padel",
    description:
      "Installable mobile web app for padel matches, rankings and tournaments.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6efe5",
    theme_color: "#e3643d",
    orientation: "portrait",
    lang: "ru-RU",
    categories: ["sports", "lifestyle", "social"],
    icons: [
      {
        src: "/icon?size=192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon?size=512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
