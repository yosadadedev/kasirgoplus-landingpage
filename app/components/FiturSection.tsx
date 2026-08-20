const FiturSection = () => {
  const features = [
    {
      icon: "⚡",
      iconBg: "bg-blue-100",
      title: "Kasir & POS Cepat",
      description:
        "Proses transaksi penjualan kasir dalam hitungan detik. Pilih produk, atur diskon, dan tentukan metode pembayaran dengan mudah.",
    },
    {
      icon: "📋",
      iconBg: "bg-blue-100",
      title: "Open Bill",
      description:
        "Simpan transaksi sebagai bon terbuka. Catat nama pelanggan, nomor meja, catatan per item, dan keterangan tambahan.",
    },
    {
      icon: "👥",
      iconBg: "bg-blue-100",
      title: "Multi-User & Hak Akses",
      description:
        "Mode owner + staf opsional dengan login PIN 4–6 digit. Atur izin per staf (kelola produk, lihat laporan, refund, dll).",
    },
    {
      icon: "📦",
      iconBg: "bg-blue-100",
      title: "Manajemen Produk",
      description:
        "Tambah produk dengan foto, SKU, barcode, kategori, deskripsi, satuan, harga jual, dan HPP. Pencarian cepat di kasir.",
    },
    {
      icon: "🧊",
      iconBg: "bg-blue-100",
      title: "Stok Otomatis",
      description:
        "Stok masuk dari supplier dan stok keluar (rusak/hilang/retur). HPP otomatis dengan metode weighted average.",
    },
    {
      icon: "📏",
      iconBg: "bg-blue-100",
      title: "Master Data Satuan",
      description:
        "Kelola satuan produk (pcs, kg, liter, dll) dengan CRUD lengkap. Aman dari penghapusan saat masih dipakai.",
    },
    {
      icon: "📊",
      iconBg: "bg-indigo-100",
      title: "Laporan Laba Rugi",
      description:
        "Laporan penjualan harian, mingguan, bulanan dengan detail laba rugi. Export ke Excel/PDF untuk analisa usaha.",
    },
    {
      icon: "💳",
      iconBg: "bg-green-100",
      title: "Multi Metode Bayar",
      description:
        "Dukung tunai, transfer bank, QRIS, e-wallet, dan campuran. Cetak struk thermal 58mm atau 80mm.",
    },
    {
      icon: "🔄",
      iconBg: "bg-amber-100",
      title: "Riwayat & Refund",
      description:
        "Riwayat transaksi lengkap dengan pencarian canggih. Proses refund partial atau penuh dengan catatan lengkap.",
    },
  ];

  return (
    <section id="fitur" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wider uppercase mb-5">
            Fitur Lengkap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Fitur Lengkap Aplikasi Kasir & POS Gratis
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Mulai dari mesin kasir cepat hingga laporan laba rugi — semuanya dirancang untuk membantu point of sale bisnis Anda tanpa biaya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
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

export default FiturSection;
