import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — KasirGo+",
  description:
    "Syarat & Ketentuan penggunaan aplikasi KasirGo+, termasuk akun, paket Free dan Pro, langganan otomatis, pembatalan, dan tanggung jawab pengguna.",
  alternates: { canonical: "/syarat-ketentuan" },
};

const sections = [
  {
    title: "Penerimaan Ketentuan",
    content: (
      <p>
        Dengan mengunduh, mendaftar, atau menggunakan aplikasi KasirGo+ (&quot;Aplikasi&quot;)
        yang disediakan oleh Yosada Labs (&quot;kami&quot;), Anda menyetujui Syarat &amp;
        Ketentuan ini dan <Link href="/kebijakan-privasi">Kebijakan Privasi</Link> kami. Jika
        Anda tidak setuju, mohon tidak menggunakan Aplikasi. Untuk pengguna iOS, ketentuan ini
        berlaku bersama Perjanjian Lisensi Pengguna Akhir Standar Apple.
      </p>
    ),
  },
  {
    title: "Layanan",
    content: (
      <p>
        KasirGo+ adalah aplikasi kasir (POS) untuk usaha, dengan fitur transaksi, manajemen produk
        dan stok, pelanggan, kasbon, pencatatan pengeluaran, laporan, cetak struk, dan sinkronisasi
        data antar perangkat. Fitur dapat ditambah, diubah, atau dihentikan sewaktu-waktu untuk
        pengembangan layanan.
      </p>
    ),
  },
  {
    title: "Akun",
    content: (
      <ul>
        <li>Anda wajib memberikan data pendaftaran yang benar dan menjaga kerahasiaan kata sandi.</li>
        <li>
          Pemilik usaha bertanggung jawab atas akun kasir/staf yang dibuat, termasuk hak akses yang
          diberikan dan seluruh aktivitas yang dilakukan melalui akun tersebut.
        </li>
        <li>Segera hubungi kami jika Anda menduga akun Anda digunakan tanpa izin.</li>
      </ul>
    ),
  },
  {
    title: "Paket Free & Pro",
    content: (
      <>
        <p>
          <strong>Paket Free</strong> dapat digunakan tanpa biaya dengan batas: maksimal 30 produk,
          30 transaksi per hari, dan 1 akun kasir.
        </p>
        <p>
          <strong>Paket Pro</strong> menghilangkan batas tersebut dan membuka fitur tambahan
          seperti custom struk dan export laporan. Pro tersedia dalam periode 1 bulan, 3 bulan,
          dan 12 bulan. Harga yang berlaku adalah harga yang ditampilkan di Aplikasi dan di App
          Store atau Google Play saat pembelian.
        </p>
      </>
    ),
  },
  {
    title: "Pembayaran & Perpanjangan Otomatis",
    content: (
      <ul>
        <li>
          Pembayaran langganan diproses dan ditagihkan oleh Apple App Store (melalui Apple ID Anda)
          atau Google Play (melalui akun Google Anda) saat pembelian dikonfirmasi.
        </li>
        <li>
          Langganan <strong>diperpanjang otomatis</strong> pada akhir setiap periode dengan harga
          yang sama, kecuali dibatalkan paling lambat <strong>24 jam sebelum</strong> periode
          berjalan berakhir.
        </li>
        <li>
          Biaya perpanjangan ditagihkan dalam 24 jam sebelum periode berjalan berakhir.
        </li>
        <li>
          Anda dapat mengelola atau membatalkan langganan kapan saja melalui pengaturan akun App
          Store (Pengaturan → [nama Anda] → Langganan) atau Google Play (Play Store → Pembayaran
          &amp; langganan → Langganan). Pembatalan berlaku pada akhir periode yang sedang berjalan,
          dan fitur Pro tetap aktif sampai periode tersebut berakhir.
        </li>
        <li>
          Jika harga berubah, Anda akan diberi tahu oleh App Store atau Google Play sesuai
          ketentuan masing-masing sebelum harga baru berlaku.
        </li>
        <li>
          Permintaan pengembalian dana (refund) mengikuti kebijakan Apple atau Google, karena
          pembayaran diproses oleh mereka.
        </li>
        <li>
          Langganan yang sudah dibeli dapat dipulihkan di perangkat lain melalui tombol
          &quot;Pulihkan Pembelian&quot; di Aplikasi, dengan akun App Store/Google Play yang sama.
        </li>
      </ul>
    ),
  },
  {
    title: "Penggunaan yang Dilarang",
    content: (
      <>
        <p>Anda tidak diperkenankan:</p>
        <ul>
          <li>Menggunakan Aplikasi untuk kegiatan yang melanggar hukum, termasuk penipuan.</li>
          <li>
            Mencoba mengakses data usaha lain, mengganggu server, atau menghindari pembatasan paket.
          </li>
          <li>Membongkar, memodifikasi, atau mendistribusikan ulang Aplikasi tanpa izin tertulis.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data & Konten Anda",
    content: (
      <>
        <p>
          Data usaha yang Anda input (produk, transaksi, pelanggan, dan lainnya) tetap menjadi
          milik Anda. Anda memberi kami izin terbatas untuk menyimpan dan memproses data tersebut
          semata-mata untuk menjalankan layanan, sebagaimana dijelaskan dalam{" "}
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>.
        </p>
        <p>
          Anda bertanggung jawab atas kebenaran data yang Anda input dan atas persetujuan
          pelanggan Anda ketika mencatat data pribadi mereka.
        </p>
      </>
    ),
  },
  {
    title: "Ketersediaan Layanan & Perangkat",
    content: (
      <ul>
        <li>
          Aplikasi dapat digunakan secara offline; sinkronisasi membutuhkan koneksi internet. Kami
          berupaya menjaga layanan tetap tersedia, tetapi tidak menjamin layanan selalu bebas
          gangguan atau kesalahan.
        </li>
        <li>
          Tidak semua printer struk didukung. Pada iPhone/iPad, hanya printer dengan Bluetooth Low
          Energy (BLE) yang dapat terhubung.
        </li>
        <li>
          Kami menyarankan Anda rutin mengekspor laporan atau mencadangkan data penting.
        </li>
      </ul>
    ),
  },
  {
    title: "Kewajiban Usaha Anda",
    content: (
      <p>
        Laporan di Aplikasi adalah alat bantu pencatatan. Kewajiban perpajakan, perizinan, dan
        pembukuan resmi usaha Anda tetap menjadi tanggung jawab Anda.
      </p>
    ),
  },
  {
    title: "Batasan Tanggung Jawab",
    content: (
      <p>
        Sejauh diizinkan oleh hukum, Aplikasi disediakan &quot;sebagaimana adanya&quot;. Yosada
        Labs tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, atau
        kehilangan data yang timbul dari penggunaan Aplikasi, termasuk akibat gangguan perangkat,
        jaringan, atau layanan pihak ketiga. Total tanggung jawab kami dibatasi sebesar biaya
        langganan yang Anda bayarkan dalam 12 bulan terakhir.
      </p>
    ),
  },
  {
    title: "Penghentian",
    content: (
      <p>
        Anda dapat berhenti menggunakan Aplikasi dan menghapus akun kapan saja melalui Pengaturan →
        Hapus Akun. Kami dapat menangguhkan atau menutup akun yang melanggar ketentuan ini.
        Penghapusan akun tidak otomatis membatalkan langganan di App Store atau Google Play;
        batalkan langganan secara terpisah agar tidak ditagih kembali.
      </p>
    ),
  },
  {
    title: "Perubahan Ketentuan",
    content: (
      <p>
        Kami dapat memperbarui ketentuan ini sewaktu-waktu. Versi terbaru selalu tersedia di
        halaman ini. Penggunaan Aplikasi setelah perubahan berarti Anda menyetujui ketentuan yang
        diperbarui.
      </p>
    ),
  },
  {
    title: "Hukum yang Berlaku",
    content: <p>Ketentuan ini diatur oleh hukum Republik Indonesia.</p>,
  },
  {
    title: "Hubungi Kami",
    content: (
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
    ),
  },
];

export default function SyaratKetentuanPage() {
  return (
    <LegalPage
      title="Syarat & Ketentuan"
      updatedAt="31 Oktober 2026"
      intro={
        <p>
          Syarat &amp; Ketentuan ini mengatur penggunaan aplikasi KasirGo+ di Android dan iOS.
          Mohon baca dengan saksama sebelum menggunakan Aplikasi.
        </p>
      }
      sections={sections}
    />
  );
}
