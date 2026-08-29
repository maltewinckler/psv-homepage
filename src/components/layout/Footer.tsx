"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-brand-primary/10 pt-20 pb-10 relative">

      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="lg:col-span-3 space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 border border-brand-primary/20 shadow-lg backdrop-blur-sm">
                  <Image
                    src="/psv-icon.png"
                    alt="PSV Essen Kampfsport"
                    width={50}
                    height={50}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              <div className="mt-1">
                <h3 className="font-black text-foreground uppercase tracking-tight">PSV ESSEN</h3>
                <p className="text-xs font-bold text-brand-primary tracking-widest uppercase">KAMPFSPORT</p>
              </div>
            </div>

            <p className="max-w-md text-foreground! text-white/80 text-xs sm:text-sm leading-relaxed font-medium">
              Dein Polizeisportverein in Essen: Abteilung Muay Thai.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/kampfsportpsvessen", label: "Instagram" },
              ].map((social, index) => (
                <a
                  title={social.label}
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 border border-brand-primary/20 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-start-4">
            <h4 className="text-brand-primary font-black text-xs tracking-[0.2em] uppercase mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Start", href: "/" },
                { name: "Über uns", href: "/#about" },
                { name: "Trainingsplan", href: "/#schedule" },
                { name: "Mitgliedschaft", href: "/#membership" },
                { name: "Kontakt", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-white font-medium text-sm transition-colors"
                  >
                    <span className="w-2 h-px bg-brand-primary opacity-50 group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-xs font-medium">
            © {currentYear} Polizei-Sportverein Essen 1922 e.V.
          </p>
          <div className="flex gap-8 md:ml-auto">
            {[
              { name: "Impressum", href: "/impressum" },
              { name: "Datenschutz", href: "/datenschutz" },
            ].map((legal) => (
              <Link
                key={legal.name}
                href={legal.href}
                className="text-white/60 hover:text-brand-primary text-xs font-medium transition-colors"
              >
                {legal.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
