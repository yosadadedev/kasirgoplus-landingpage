import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 relative bg-[#3958A3] rounded-xl flex items-center justify-center p-1.5 overflow-hidden">
                <Image
                  src="/kasirgoplus-icon.svg"
                  alt="KasirGo+ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Kasir<span className="text-[#3958A3]">Go+</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Aplikasi kasir digital & POS gratis untuk UMKM Indonesia. Kelola penjualan, stok barang,
              dan keuangan usaha Anda dengan mudah. 100% offline-first, aman, dan tanpa biaya langganan.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-xl transition-all font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                GET IT ON
                <span className="font-bold text-lg leading-tight">
                  Google Play
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Produk</h4>
            <ul className="space-y-3">
              {["Fitur", "Harga", "Changelog", "Roadmap"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Perusahaan</h4>
            <ul className="space-y-3">
              {["Tentang Kami", "Blog", "Kontak", "Karir"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} KasirGo+. Dibuat dengan ❤️ untuk UMKM Indonesia.
          </p>
          <div className="flex items-center gap-4">
            {[
              { name: "Twitter", icon: "𝕏" },
              { name: "Instagram", icon: "📷" },
              { name: "Facebook", icon: "f" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#3958A3] rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all text-sm font-bold"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
