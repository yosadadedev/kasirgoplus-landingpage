import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "KasirGo+ — Aplikasi Kasir Gratis & POS Offline untuk UMKM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [screenshot, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/kasir-screen.jpeg"), "base64"),
    readFile(join(process.cwd(), "public/kasirgoplus-icon.svg"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: "linear-gradient(135deg, #3958A3 0%, #263d75 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 36 }}>
            <img src={`data:image/svg+xml;base64,${logo}`} width={92} height={56} alt="" />
            <div style={{ fontSize: 44, fontWeight: 700 }}>KasirGo+</div>
          </div>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, marginBottom: 28 }}>
            Aplikasi Kasir Gratis untuk UMKM
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, lineHeight: 1.35 }}>
            Transaksi cepat, kelola stok, cetak struk & laporan — tetap jalan tanpa internet.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              padding: "14px 28px",
              background: "white",
              color: "#3958A3",
              borderRadius: 999,
              fontSize: 26,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            Download gratis di Play Store
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: 10,
            background: "#111827",
            borderRadius: 40,
            boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={`data:image/jpeg;base64,${screenshot}`}
            width={236}
            height={525}
            style={{ borderRadius: 32 }}
            alt=""
          />
        </div>
      </div>
    ),
    size,
  );
}
