"use client";

import { useState } from "react";

const HargaSection = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const pricingPlans = [
    { device: "2 Perangkat", price: "Rp 19.900", period: "/bln" },
    { device: "3 Perangkat", price: "Rp 24.900", period: "/bln" },
    { device: "10 Perangkat", price: "Rp 69.000", period: "/bln" },
  ];

  const cloudFeatures = [
    {
      icon: "🛡️",
      iconBg: "bg-blue-100",
      title: "Backup Cloud Otomatis & Aman",
      description:
        "Data transaksi ter-backup secara instan ke cloud yang aman. Tidak perlu takut kehilangan data saat HP rusak/hilang.",
    },
    {
      icon: "🔄",
      iconBg: "bg-blue-100",
      title: "Sinkronisasi Real-Time Multi-Perangkat",
      description:
        "Hubungkan kasir, bagian admin, owner, dan dapur sekaligus. Data sinkron instan di semua perangkat.",
    },
    {
      icon: "☁️",
      iconBg: "bg-blue-100",
      title: "Akses Dashboard Web Lanjutan",
      description:
        "Pantau dan analisis laporan penjualan real-time langsung dari web browser Anda kapan saja.",
    },
    {
      icon: "🛒",
      iconBg: "bg-blue-100",
      title: "Katalog & Menu Digital",
      description:
        "Dapatkan katalog online gratis dan buat pelanggan bisa melihat produk Anda dengan mudah di Market.",
    },
  ];

  const comparisonData = [
    { feature: "Batas Transaksi Harian", gratis: "Tanpa Batas", pro: "Tanpa Batas", proHighlight: false },
    { feature: "Batas Jumlah Produk & SKU", gratis: "Tanpa Batas", pro: "Tanpa Batas", proHighlight: false },
    { feature: "Cetak Struk Bluetooth Termal & PDF", gratis: "check", pro: "check", proHighlight: false },
    { feature: "Jumlah Perangkat Terhubung", gratis: "Maksimal 1 Perangkat", pro: "2, 3, hingga 10 Perangkat", proHighlight: true },
    { feature: "Sinkronisasi Real-time Antar Perangkat", gratis: "cross", pro: "Ya (Otomatis melalui Cloud)", proHighlight: true },
    { feature: "Penyimpanan & Keamanan Data", gratis: "Lokal di Perangkat (HP/Tablet)", pro: "Cadangan Otomatis Cloud (Aman)", proHighlight: true },
    { feature: "Akses Dashboard Web Online", gratis: "cross", pro: "Ya (dashboard.kasirgoplus.id)", proHighlight: true },
    { feature: "Menu Digital & listing Market", gratis: "cross", pro: "Ya (market.kasirgoplus.id)", proHighlight: true },
  ];

  const faqList = [
    {
      question: "Apa perbedaan utama antara paket Gratis Selamanya dan paket Berlangganan?",
      answer:
        "Paket Gratis Selamanya berjalan secara lokal (offline-first) untuk 1 perangkat. Semua data disimpan di perangkat Anda sendiri. Sementara paket Berlangganan memungkinkan Anda menambahkan 2, 3, hingga 10 perangkat yang tersinkronisasi secara otomatis melalui cloud secara real-time, sehingga memudahkan koordinasi tim kasir dan owner.",
    },
    {
      question: "Apakah ada batasan jumlah transaksi atau produk pada paket Gratis?",
      answer:
        "TIDAK ADA BATASAN SAMA SEKALI. Baik paket Gratis maupun Berlangganan keduanya menyediakan fitur inti POS tanpa batas jumlah transaksi, tanpa batas jumlah produk/SKU, dan tanpa iklan. Fitur inti 100% gratis selamanya untuk 1 perangkat.",
    },
    {
      question: "Bagaimana cara menambah perangkat baru ke sistem kasir saya?",
      answer:
        "Cukup install aplikasi KasirGo+ di perangkat baru, lalu masuk dengan kode toko yang sama dari perangkat utama Anda. Jika paket Berlangganan, sinkronisasi otomatis dimulai saat perangkat terhubung ke internet.",
    },
    {
      question: "Apakah saya bisa membatalkan langganan perangkat tambahan kapan saja?",
      answer:
        "Bisa! Anda bisa membatalkan langganan kapan saja tanpa denda. Saat dibatalkan, paket aktif sampai akhir periode berbayar Anda tetap bisa menikmati fitur cloud, dan setelah itu sistem kembali ke paket Gratis 1 perangkat (data lokal Anda tidak hilang).",
    },
  ];

  return (
    <section id="harga" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            KOMITMEN 100% UNTUK UMKM
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Pilih Paket Harga Sesuai{" "}
            <span className="text-blue-600">Skala Bisnis Anda</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Semua fitur esensial POS & kelola stok 100% Gratis Selamanya tanpa batasan transaksi.
            Hubungkan beberapa perangkat Anda dengan berlangganan untuk sinkronisasi data real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-start">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/60">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✨</span>
              <h3 className="text-2xl font-extrabold text-gray-900">Paket Perangkat</h3>
            </div>
            <p className="text-gray-600 mb-6 pb-6 border-b border-gray-200">
              Paket gratis (1 perangkat)
            </p>

            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              Tambah Perangkat Dengan Berlangganan:
            </p>

            <div className="space-y-4">
              {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between bg-gray-50 hover:bg-blue-50/50 border border-gray-200 hover:border-blue-200 rounded-2xl p-5 transition-all duration-200"
              >
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-1">
                  {plan.device}
                </p>
                <p className="text-gray-600 font-medium">
                  <span className="font-semibold text-gray-900">{plan.price}</span>
                  <span>{plan.period}</span>
                </p>
                </div>
                <button
                  type="button"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
                >
                  Langganan
                </button>
              </div>
            ))}
            </div>
          </div>

          <div className="pt-4 lg:pl-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
              Keunggulan Fitur Cloud & Multi-Perangkat:
            </h3>
            <div className="space-y-7">
              {cloudFeatures.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`flex-shrink-0 w-11 h-11 ${feat.iconBg} rounded-xl flex items-center justify-center text-xl`}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1.5">
                      {feat.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Perbandingan Detail Fitur
          </h3>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <div className="grid grid-cols-3 bg-gray-50/80 border-b border-gray-200">
              <div className="p-5 sm:p-6 font-bold text-gray-900 text-base sm:text-lg">Fitur Utama</div>
              <div className="p-5 sm:p-6 font-bold text-gray-900 text-base sm:text-lg text-center">
                Gratis (1 Perangkat)
              </div>
              <div className="p-5 sm:p-6 font-bold text-gray-900 text-base sm:text-lg text-center">
                Paket Berlangganan
              </div>
            </div>
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 ${
                  idx % 2 === 1 ? "bg-white" : "bg-gray-50/40"
                }`}
              >
                <div className="p-5 sm:p-6 font-semibold text-gray-800 text-sm sm:text-base">
                  {row.feature}
                </div>
                <div className="p-5 sm:p-6 text-sm sm:text-base text-center flex items-center justify-center">
                  {row.gratis === "check" ? (
                    <span className="inline-flex items-center gap-1.5 text-blue-600 font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Ya
                    </span>
                  ) : row.gratis === "cross" ? (
                    <span className="inline-flex items-center gap-1.5 text-gray-400 font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Tidak
                    </span>
                  ) : (
                    <span className="text-gray-500">{row.gratis}</span>
                  )}
                </div>
                <div className="p-5 sm:p-6 text-sm sm:text-base text-center flex items-center justify-center">
                  {row.pro === "check" ? (
                    <span className="inline-flex items-center gap-1.5 text-blue-600 font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Ya
                    </span>
                  ) : (
                    <span className={row.proHighlight ? "text-blue-600 font-bold" : "text-gray-500"}>
                      {row.pro}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Pertanyaan Umum seputar Harga
          </h3>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl border border-gray-200 overflow-hidden ${
                  faqOpen === idx ? "shadow-lg shadow-gray-200/40" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-7 py-5 sm:py-6 group"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      ?
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180 text-blue-600" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    faqOpen === idx ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-6 sm:pb-8 pl-16 sm:pl-[4.5rem]">
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HargaSection;
