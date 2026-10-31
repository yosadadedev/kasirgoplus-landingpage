import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  intro: ReactNode;
  sections: LegalSection[];
};

// Shared layout for the legal pages (Kebijakan Privasi, Syarat & Ketentuan). The landing
// Navbar uses in-page anchors, so these pages get a minimal header that links back home.
const LegalPage = ({ title, updatedAt, intro, sections }: LegalPageProps) => {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative bg-[#3958A3] rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
              <Image
                src="/kasirgoplus-icon.svg"
                alt="KasirGo+ Logo"
                fill
                className="object-contain scale-[0.8]"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Kasir<span className="text-[#3958A3]">Go+</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#3958A3] hover:underline">
            Kembali ke Beranda
          </Link>
        </nav>
      </header>

      <main className="flex-1 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">Terakhir diperbarui: {updatedAt}</p>

          <div className="mt-8 text-gray-700 leading-relaxed space-y-4">{intro}</div>

          <div className="mt-10 space-y-10">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                <div className="mt-3 text-gray-700 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-[#3958A3] [&_a]:underline">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
