const KenapaSection = () => {
  const features = [
    {
      icon: "🎁",
      iconBg: "bg-blue-100",
      title: "Aplikasi Kasir Gratis Selamanya",
      description:
        "Tidak ada biaya langganan atau biaya tersembunyi. Aplikasi kasir kami gratis selamanya dengan fitur POS lengkap tanpa batasan fitur.",
    },
    {
      icon: "🛡️",
      iconBg: "bg-teal-100",
      title: "POS Offline-First & Aman",
      description:
        "Sistem point of sale offline yang menyimpan seluruh data di perangkatmu. Transaksi lancar tanpa kuota internet, privasi terjaga 100%.",
    },
    {
      icon: "⬇️",
      iconBg: "bg-green-100",
      title: "Backup & Restore Mudah",
      description:
        "Backup data ke file JSON kapan saja. Pindah HP? Tinggal restore. Data kasir digital kamu selalu aman.",
    },
    {
      icon: "</>",
      iconBg: "bg-amber-100",
      title: "Open Source & Aktif",
      description:
        "Kode sumber terbuka. Komunitas aktif mengembangkan sistem point of sale ini secara rutin dengan fitur terbaru.",
    },
  ];

  return (
    <section id="kenapa" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Kenapa <span className="text-blue-600">KasirGo+</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Dibuat dengan hati untuk membantu UMKM Indonesia naik kelas, tanpa beban biaya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KenapaSection;
