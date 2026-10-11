// Dipakai oleh FAQSection & HargaSection, sekaligus JSON-LD FAQPage di layout.tsx,
// supaya isi structured data selalu sama dengan yang tampil di halaman.

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Apakah benar-benar gratis?",
    answer:
      "Bisa dipakai gratis dengan akses hampir semua fitur POS — tinggal install dan langsung transaksi tanpa bayar. Kalau butuh lebih longgar, tersedia opsi upgrade ke Pro seharga Rp24.900/bulan.",
  },
  {
    question: "Apakah butuh internet?",
    answer:
      "Tidak wajib! KasirGo+ bisa dipakai offline maupun online. Saat tidak ada internet, transaksi tetap jalan dan data tersimpan di perangkat Anda. Begitu HP kembali online, data otomatis tersinkron ke server.",
  },
  {
    question: "Bisa dipakai banyak kasir/staf?",
    answer:
      "Bisa! Fitur multi-user memungkinkan Anda membuat akun staf dengan PIN 4-6 digit. Anda bisa atur hak akses per staf: misalnya staf kasir hanya bisa proses transaksi, tidak bisa lihat laporan keuangan.",
  },
  {
    question: "Bisa simpan transaksi yang belum dibayar (open bill)?",
    answer:
      "Tentu saja. Fitur Open Bill memungkinkan Anda menyimpan transaksi sementara untuk pelanggan yang makan di tempat atau pesan dulu bayar nanti. Bisa tambahkan nomor meja, nama pelanggan, dan catatan khusus.",
  },
  {
    question: "Bagaimana kalau HP rusak/hilang?",
    answer:
      "Jangan panik! Data transaksi Anda otomatis tersinkron ke server setiap kali HP terhubung internet. Jika HP rusak/hilang, tinggal install KasirGo+ di HP baru, login dengan akun yang sama, dan data Anda kembali utuh.",
  },
  {
    question: "Apakah data saya aman?",
    answer:
      "Aman. KasirGo+ offline-first — data transaksi tersimpan di perangkat Anda dan otomatis tersinkron ke server saat online, jadi tetap terjaga meski ganti HP. Privasi dan keamanan data usaha Anda adalah prioritas utama kami.",
  },
  {
    question: "Bisa dipakai di tablet?",
    answer:
      "Bisa! KasirGo+ tersedia untuk HP dan tablet Android, dengan tampilan yang menyesuaikan layar HP (5 inch) hingga tablet (10 inch).",
  },
  {
    question: "Bagaimana cara cetak struk?",
    answer:
      "KasirGo+ mendukung printer thermal Bluetooth ukuran 58mm dan 80mm dari berbagai merk (Epson, Xprinter, dll). Cukup pairing Bluetooth printer dengan HP Anda, lalu cetak struk otomatis setelah transaksi.",
  },
];

export const hargaFaqs: Faq[] = [
  {
    question: "Apa perbedaan utama antara paket Gratis dan Pro?",
    answer:
      "Paket Gratis cocok untuk coba pakai, dengan batas 30 produk, 30 transaksi per hari, dan 1 akun kasir. Paket Pro menghilangkan semua batas itu (produk, transaksi, dan kasir tanpa batas), plus custom struk, export laporan (Excel, PDF, dll), dan prioritas akses ke fitur terbaru.",
  },
  {
    question: "Apakah ada biaya tersembunyi di paket Pro?",
    answer:
      "Tidak ada. Harga yang tertera (Rp24.900/bulan, Rp64.900/3 bulan, atau Rp249.900/tahun) adalah harga akhir yang Anda bayar, tanpa biaya tambahan lainnya.",
  },
  {
    question: "Apakah saya bisa membatalkan langganan Pro kapan saja?",
    answer:
      "Bisa! Anda bisa membatalkan langganan kapan saja tanpa denda. Paket Pro tetap aktif sampai akhir periode yang sudah dibayar, setelah itu akun kembali ke paket Gratis dengan batasannya (data Anda tidak hilang).",
  },
  {
    question: "Kalau sudah lewat batas 30 produk atau 30 transaksi/hari di paket Gratis, apa yang terjadi?",
    answer:
      "Anda perlu upgrade ke Pro untuk menambah produk baru atau memproses transaksi lebih dari batas harian tersebut. Data dan transaksi yang sudah ada sebelumnya tetap aman.",
  },
];
