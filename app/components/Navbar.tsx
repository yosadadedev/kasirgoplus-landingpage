"use client";

import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const navLinks = [
    { name: "Kenapa", href: "#kenapa" },
    { name: "Fitur", href: "#fitur" },
    { name: "Cara Pakai", href: "#cara-pakai" },
    { name: "FAQ", href: "#faq" },
    { name: "Harga", href: "#harga" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.yl.kasirgoplus&hl=id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-full transition-all font-medium text-base shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Image
                src="/google-play-store-icon.svg"
                alt="Google Play"
                width={20}
                height={20}
              />
              Download di Play Store
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
