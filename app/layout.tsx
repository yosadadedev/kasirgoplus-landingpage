import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { faqs, hargaFaqs, type Faq } from "./data/faqs";

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

const siteUrl = "https://kasirgoplus.com";
// GA4 hanya aktif di build production, supaya `npm run dev` tidak mengotori data
const gaId = process.env.NODE_ENV === "production" ? "G-26WVSXD51L" : undefined;
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id";

const title = "KasirGo+ — Aplikasi Kasir Gratis & POS Offline untuk UMKM";
const description =
  "Aplikasi kasir Android gratis untuk toko, warung & UMKM. Transaksi cepat, kelola stok, cetak struk, laporan laba rugi. Tetap jalan tanpa internet.";

export const viewport: Viewport = {
  themeColor: "#3958A3",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "KasirGo+",
  keywords: [
    "aplikasi kasir",
    "aplikasi kasir gratis",
    "aplikasi kasir android",
    "aplikasi kasir offline",
    "aplikasi kasir umkm",
    "kasir digital",
    "aplikasi pos",
    "point of sale",
    "aplikasi toko",
    "aplikasi warung",
    "manajemen stok",
    "cetak struk thermal",
    "laporan laba rugi",
    "kasirgo+",
  ],
  authors: [{ name: "Yosada Labs" }],
  creator: "Yosada Labs",
  publisher: "Yosada Labs",
  category: "business",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  // Gambar OG & Twitter diambil otomatis dari app/opengraph-image.tsx
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "KasirGo+",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const toFaqEntity = (faq: Faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: { "@type": "Answer", text: faq.answer },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "KasirGo+",
      url: siteUrl,
      logo: `${siteUrl}/kasirgoplus-icon.svg`,
      email: "halokasirgoplus@gmail.com",
      telephone: "+62859106610011",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Mijil, Gedongan, Bangunjiwo",
        addressLocality: "Kasihan, Bantul",
        addressRegion: "Daerah Istimewa Yogyakarta",
        postalCode: "55184",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+62859106610011",
        email: "halokasirgoplus@gmail.com",
        availableLanguage: ["id"],
      },
      parentOrganization: { "@type": "Organization", name: "Yosada Labs" },
      sameAs: [playStoreUrl, "https://www.tiktok.com/@kasirgoplus"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "KasirGo+",
      inLanguage: "id-ID",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "KasirGo+",
      alternateName: "KasirGo+ Aplikasi Kasir UMKM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      softwareVersion: "1.4.0",
      inLanguage: "id-ID",
      description:
        "Aplikasi kasir digital dan POS (Point of Sale) untuk UMKM Indonesia — kelola penjualan, stok barang, dan keuangan usaha. Offline-first, bisa mulai gratis kapan saja.",
      url: siteUrl,
      downloadUrl: playStoreUrl,
      installUrl: playStoreUrl,
      screenshot: [
        `${siteUrl}/kasir-screen.jpeg`,
        `${siteUrl}/transaksi-screen.jpeg`,
        `${siteUrl}/report-screen.jpeg`,
      ],
      featureList: [
        "Kasir & POS cepat",
        "Open bill",
        "Multi-user & hak akses",
        "Manajemen produk & stok",
        "Laporan laba rugi",
        "Multi metode bayar (tunai, transfer, QRIS, e-wallet)",
        "Cetak struk thermal 58mm/80mm",
        "Kasbon",
        "Pelanggan & member",
        "Pencatatan pengeluaran",
        "Offline-first, sinkron saat online",
      ],
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        ratingCount: "62",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [...faqs, ...hargaFaqs].map(toFaqEntity),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
        {gaId && (
          <>
            <GoogleAnalytics gaId={gaId} />
            <AnalyticsEvents />
          </>
        )}
      </body>
    </html>
  );
}
