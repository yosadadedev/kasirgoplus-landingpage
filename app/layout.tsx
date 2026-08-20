import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KasirGo+ - Aplikasi Kasir Digital & POS Gratis Terbaik untuk UMKM",
  description: "KasirGo+ adalah aplikasi kasir digital dan POS (Point of Sale) gratis untuk mengelola penjualan, stok barang, dan keuangan usaha Anda. Cocok untuk toko, warung, kulakan, dan UMKM Indonesia. 100% offline-first, aman, dan mudah digunakan.",
  keywords: [
    "aplikasi kasir",
    "kasir digital",
    "pos gratis",
    "point of sale",
    "kasir online",
    "aplikasi toko",
    "manajemen stok",
    "laporan keuangan",
    "umkm",
    "kasirgo+"
  ],
  authors: [{ name: "KasirGo+" }],
  openGraph: {
    title: "KasirGo+ - Aplikasi Kasir Digital & POS Gratis",
    description: "Kelola penjualan, stok barang, dan keuangan dengan aplikasi kasir gratis KasirGo+. Sistem POS terbaik untuk HP, tablet, dan laptop.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "KasirGo+ - Aplikasi Kasir Digital & POS Gratis",
    description: "Aplikasi kasir digital dan POS gratis untuk UMKM Indonesia.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
