const CaraPakaiSection = () => {
  const steps = [
    {
      number: "1",
      icon: "⬇️",
      title: "Download di Play Store",
      description:
        "Unduh aplikasi KasirGo+ dari Google Play Store di handphone Android Anda. Gratis tanpa iklan mengganggu.",
    },
    {
      number: "2",
      icon: "⚙️",
      title: "Setup Toko",
      description:
        "Isi nama toko, alamat, dan pilih warna tema. Bisa langsung muat data contoh untuk coba-coba tanpa input manual.",
    },
    {
      number: "3",
      icon: "🚀",
      title: "Mulai Jualan!",
      description:
        "Tambah produk, proses transaksi, dan pantau laporan. Semua gratis tanpa batasan! Bisa langsung pakai dari HP.",
    },
  ];

  return (
    <section id="cara-pakai" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wider uppercase mb-5">
            Cara Pakai
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Mulai dalam 3 langkah mudah
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Tidak perlu pelatihan, tidak perlu IT. Siapapun bisa pakai dalam 5 menit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -top-8 left-6 text-[120px] font-black text-gray-100 leading-none select-none pointer-events-none group-hover:text-blue-100 transition-colors">
                {step.number}
              </div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-600/25 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all font-semibold text-lg shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
            Download Gratis di Play Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaraPakaiSection;
