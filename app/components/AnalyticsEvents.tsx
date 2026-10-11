"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

// Satu listener untuk semua CTA keluar, supaya section lain tidak perlu
// diubah jadi client component hanya untuk tracking.
const trackedLinks = [
  { match: "play.google.com", event: "click_play_store" },
  { match: "wa.me", event: "click_whatsapp" },
  { match: "tiktok.com", event: "click_tiktok" },
];

const AnalyticsEvents = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const tracked = trackedLinks.find((t) => link.href.includes(t.match));
      if (!tracked) return;

      // Asal klik: id section (hero, fitur, harga, ...), atau header/footer/floating
      const location =
        link.closest("section")?.id ||
        link.closest("header, footer")?.tagName.toLowerCase() ||
        "floating";

      sendGAEvent("event", tracked.event, {
        location,
        link_text: link.textContent?.trim().slice(0, 100) || link.getAttribute("aria-label") || "",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default AnalyticsEvents;
