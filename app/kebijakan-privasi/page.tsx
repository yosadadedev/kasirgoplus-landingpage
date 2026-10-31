import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — KasirGo+",
  description:
    "Kebijakan Privasi aplikasi KasirGo+: data apa yang dikumpulkan, cara penggunaannya, pihak ketiga, penyimpanan, dan hak Anda atas data.",
  alternates: { canonical: "/kebijakan-privasi" },
};

const sections = [
  {
    title: "Data yang Kami Kumpulkan",
    content: (
      <>
        <p>
          <strong>a. Data akun.</strong> Nama, alamat email, nomor HP, dan kata sandi saat Anda
          mendaftar atau masuk. Kata sandi disimpan dalam bentuk ter-hash (bcrypt), bukan teks asli.
          Jika Anda menambahkan akun kasir/staf, kami juga menyimpan nama, peran, hak akses, dan PIN
          kasir tersebut.
        </p>
        <p>
          <strong>b. Data usaha.</strong> Nama, alamat, nomor telepon, dan email usaha, pengaturan
          struk dan printer, serta pengaturan QRIS termasuk gambar QRIS yang Anda unggah.
        </p>
        <p>
          <strong>c. Data operasional usaha.</strong> Produk (termasuk foto produk), kategori,
          satuan, stok dan riwayat pergerakan stok, transaksi penjualan, diskon, kasbon, serta
          catatan pemasukan dan pengeluaran yang Anda input di aplikasi.
        </p>
        <p>
          <strong>d. Data pelanggan Anda.</strong> Jika Anda memakai fitur pelanggan, data yang
          Anda input seperti nama, nomor HP, email, alamat, kota, tanggal lahir, jenis kelamin,
          riwayat belanja, dan poin. Data ini milik usaha Anda; Anda bertanggung jawab memastikan
          pelanggan Anda setuju datanya dicatat.
        </p>
        <p>
          <strong>e. Data langganan.</strong> Status dan riwayat langganan Pro (paket, tanggal
          mulai, dan tanggal berakhir). Pembayaran diproses oleh Apple App Store atau Google Play;
          kami <strong>tidak</strong> menerima atau menyimpan data kartu maupun data pembayaran
          Anda.
        </p>
        <p>
          <strong>f. Data teknis.</strong> ID perangkat acak yang dibuat oleh aplikasi untuk
          mengelola sesi login, serta catatan teknis server (seperti alamat IP dan waktu akses)
          untuk keamanan dan penanganan masalah.
        </p>
      </>
    ),
  },
  {
    title: "Izin Perangkat",
    content: (
      <>
        <p>Aplikasi hanya meminta izin berikut saat fiturnya Anda gunakan:</p>
        <ul>
          <li>
            <strong>Kamera</strong> — untuk memindai barcode produk.
          </li>
          <li>
            <strong>Foto/galeri</strong> — untuk memilih foto produk, logo struk, atau gambar
            QRIS, dan untuk menyimpan gambar struk.
          </li>
          <li>
            <strong>Bluetooth</strong> (dan lokasi pada Android versi lama, sesuai syarat sistem
            Android) — untuk mencari dan terhubung ke printer struk. Kami tidak melacak lokasi Anda.
          </li>
          <li>
            <strong>Notifikasi</strong> — untuk menampilkan informasi dan pengingat dari aplikasi.
          </li>
        </ul>
        <p>Anda dapat mencabut izin kapan saja melalui pengaturan perangkat.</p>
      </>
    ),
  },
  {
    title: "Cara Kami Menggunakan Data",
    content: (
      <ul>
        <li>Menjalankan fitur kasir, stok, laporan, pelanggan, dan pencatatan keuangan.</li>
        <li>Menyinkronkan data antar perangkat dan antar kasir dalam satu usaha.</li>
        <li>Mengelola akun, login, reset kata sandi, dan hak akses staf.</li>
        <li>Memverifikasi dan mengaktifkan langganan Pro.</li>
        <li>Menjaga keamanan layanan dan mencegah penyalahgunaan.</li>
        <li>Memberikan dukungan saat Anda menghubungi kami.</li>
      </ul>
    ),
  },
  {
    title: "Penyimpanan Data",
    content: (
      <>
        <p>
          KasirGo+ bekerja <em>offline-first</em>: data disimpan di perangkat Anda agar kasir tetap
          berjalan tanpa internet, lalu disinkronkan ke server yang dikelola Yosada Labs saat
          perangkat online. Foto produk dan gambar QRIS disimpan di layanan penyimpanan cloud
          (Cloudflare R2).
        </p>
        <p>
          Server dan penyedia infrastruktur kami dapat berlokasi di luar Indonesia. Kami memilih
          penyedia yang menerapkan standar keamanan yang wajar.
        </p>
      </>
    ),
  },
  {
    title: "Pihak Ketiga",
    content: (
      <>
        <p>
          Kami <strong>tidak menjual</strong> data Anda dan tidak membagikannya untuk keperluan
          iklan. Data hanya diproses oleh penyedia layanan berikut sebatas yang diperlukan:
        </p>
        <ul>
          <li>
            <strong>Apple App Store &amp; Google Play</strong> — pemrosesan pembayaran langganan.
          </li>
          <li>
            <strong>RevenueCat</strong> — pengelolaan status langganan dalam aplikasi.
          </li>
          <li>
            <strong>Cloudflare</strong> — penyimpanan foto produk dan gambar QRIS.
          </li>
          <li>
            <strong>Penyedia layanan email</strong> — pengiriman kode OTP reset kata sandi.
          </li>
          <li>
            <strong>Google Analytics</strong> — statistik kunjungan situs web kasirgoplus.com
            (hanya situs web, bukan aplikasi).
          </li>
        </ul>
        <p>
          Saat Anda memilih mengirim struk lewat WhatsApp atau membagikan file, data tersebut
          dikirim oleh Anda melalui aplikasi pilihan Anda dan tunduk pada kebijakan aplikasi itu.
        </p>
        <p>
          Kami dapat mengungkapkan data jika diwajibkan oleh hukum yang berlaku atau perintah
          otoritas yang berwenang.
        </p>
      </>
    ),
  },
  {
    title: "Retensi & Penghapusan Data",
    content: (
      <>
        <p>
          Data disimpan selama akun Anda aktif. Anda dapat menghapus akun langsung dari aplikasi
          melalui <strong>Pengaturan → Hapus Akun</strong>. Jika Anda pemilik usaha, penghapusan
          akun juga menghapus data usaha (produk, transaksi, pelanggan, kasir, dan pengaturan) dari
          server kami. Tindakan ini tidak dapat dibatalkan.
        </p>
        <p>
          Data yang masih tersimpan di perangkat akan terhapus saat Anda keluar dari akun atau
          menghapus aplikasi. Anda juga dapat meminta penghapusan data melalui kontak di bawah.
        </p>
      </>
    ),
  },
  {
    title: "Keamanan",
    content: (
      <ul>
        <li>Komunikasi antara aplikasi dan server menggunakan koneksi terenkripsi (HTTPS).</li>
        <li>Kata sandi disimpan dalam bentuk ter-hash.</li>
        <li>Akses data dibatasi per usaha dan sesuai hak akses setiap kasir/staf.</li>
      </ul>
    ),
  },
  {
    title: "Hak Anda",
    content: (
      <>
        <p>
          Sesuai Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak
          untuk:
        </p>
        <ul>
          <li>Mengakses dan memperbarui data Anda melalui aplikasi.</li>
          <li>Mengekspor laporan Anda (Excel, PDF, dan format lain yang tersedia).</li>
          <li>Menghapus akun dan data Anda.</li>
          <li>Menarik persetujuan, misalnya dengan mencabut izin perangkat.</li>
          <li>Mengajukan pertanyaan atau keberatan tentang pemrosesan data Anda.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Anak-anak",
    content: (
      <p>
        KasirGo+ ditujukan untuk pelaku usaha dan tidak ditujukan untuk anak-anak. Kami tidak
        dengan sengaja mengumpulkan data pribadi anak.
      </p>
    ),
  },
  {
    title: "Perubahan Kebijakan",
    content: (
      <p>
        Kebijakan ini dapat diperbarui sewaktu-waktu. Versi terbaru selalu tersedia di halaman ini
        dengan tanggal pembaruan di bagian atas. Untuk perubahan penting, kami akan memberi tahu
        melalui aplikasi.
      </p>
    ),
  },
  {
    title: "Hubungi Kami",
    content: (
      <>
        <p>Untuk pertanyaan atau permintaan terkait data Anda, hubungi Yosada Labs:</p>
        <ul>
          <li>
            Email: <a href="mailto:halokasirgoplus@gmail.com">halokasirgoplus@gmail.com</a>
          </li>
          <li>
            WhatsApp:{" "}
            <a href="https://wa.me/62859106610011" target="_blank" rel="noopener noreferrer">
              0859-1066-10011
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      updatedAt="31 Oktober 2026"
      intro={
        <p>
          Kebijakan Privasi ini menjelaskan bagaimana Yosada Labs (&quot;kami&quot;) mengumpulkan,
          menggunakan, dan melindungi data Anda saat menggunakan aplikasi KasirGo+ di Android dan
          iOS, serta situs web kasirgoplus.com. Dengan menggunakan KasirGo+, Anda menyetujui
          praktik yang dijelaskan di sini.
        </p>
      }
      sections={sections}
    />
  );
}
