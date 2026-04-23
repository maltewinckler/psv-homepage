"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Start', href: '/#top', id: 'home' },
  { name: 'Über uns', href: '/#about', id: 'about' },
  { name: 'Trainingsplan', href: '/#schedule', id: 'schedule' },
  { name: 'Mitgliedschaft', href: '/#membership', id: 'membership' },
  { name: 'Kontakt', href: '/#contact', id: 'contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    NAV_LINKS.forEach((link) => {
      const targetSection = document.getElementById(link.id);
      if (targetSection) {
        observer.observe(targetSection);
      }
    });

    return () => {
      NAV_LINKS.forEach((link) => {
        const targetSection = document.getElementById(link.id);
        if (targetSection) {
          observer.unobserve(targetSection);
        }
      });
    };
  }, [isHomePage]);

  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-background/80 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Left Section: Hamburger + Logo */}
            <div className="flex items-center gap-4">

              {/* Hamburger Button */}
              <button
                title="Menü öffnen"
                className="lg:hidden text-foreground p-1"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/psv-icon.png"
                    alt="PSV Essen Sportzentrum Logo"
                    width={40}
                    height={40}
                    className="h-8 lg:h-10 w-auto object-contain"
                    priority
                  />
                <div className="flex flex-col leading-tight">
                  <span className="font-black text-base lg:text-lg tracking-tight text-white">PSV ESSEN</span>
                  <span className="font-bold text-[0.6rem] lg:text-xs text-brand-primary tracking-[0.2em]">SPORTZENTRUM</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-10 items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-semibold transition text-sm uppercase tracking-wider ${
                    isHomePage && activeSection === link.id
                      ? 'text-brand-primary'
                      : 'text-white/90 hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/blog"
                className={`font-semibold transition text-sm uppercase tracking-wider ${
                  isBlogPage
                    ? 'text-brand-primary'
                    : 'text-white/90 hover:text-brand-primary'
                }`}
              >
                Aktuelles
              </Link>

              <Link
                href="/#contact"
                className="bg-brand-primary text-black px-4 py-2 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-primary/90 transition shadow-lg"
              >
                PROBETRAINING
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-[75vw] max-w-sm bg-background/40 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        <div className="flex items-center justify-between h-20 px-4 border-b border-brand-primary/20">
          <span className="font-black text-lg tracking-tight text-white">MENÜ</span>
          <button
            title='Menü schließen'
            className="text-white p-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 space-y-6 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-semibold transition text-sm md:text-base uppercase tracking-wider block ${
                isHomePage && activeSection === link.id
                  ? 'text-brand-primary'
                  : 'text-white/90 hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-semibold transition text-sm md:text-base uppercase tracking-wider block ${
              isBlogPage
                ? 'text-brand-primary'
                : 'text-white/90 hover:text-brand-primary'
            }`}
          >
            Aktuelles
          </Link>

          <div className="pt-6 border-t border-brand-primary/20">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-primary text-black px-4 py-2 md:px-6 md:py-4 text-center rounded-sm font-black text-sm md:text-base uppercase tracking-widest hover:bg-brand-primary/90 transition shadow-lg w-full block"
            >
              PROBETRAINING
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
