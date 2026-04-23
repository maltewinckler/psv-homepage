"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  padStart?: boolean;
}

const AnimatedNumber = ({
  end,
  duration = 2000,
  suffix = "",
  padStart = false
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formattedCount = padStart ? String(count).padStart(2, '0') : count;

  return <>{formattedCount}{suffix}</>;
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 scroll-mt-28 lg:scroll-mt-32"
    >

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700 bg-[url('/hero-bg.jpg')]"
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-0.5 w-12 bg-brand-primary"></div>
            <span className="text-brand-primary font-bold text-[0.6rem] md:text-xs tracking-[0.3em] uppercase">Seit 1922 • Polizei-Sportverein Essen e.V.</span>
          </div>

          <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-[1.05] tracking-tighter mb-8">
            SPORT FÜR ESSEN<br />
            <span className="text-brand-primary">GEMEINSAM</span><br />
            GEMEINNÜTZIG
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-xl mb-6 md:mb-12 leading-relaxed font-medium">
            Willkommen im Sportzentrum des PSV Essen! Wir trainieren Kinder, Jugendliche und Erwachsene in einer familiären Atmosphäre. Thaiboxing, MMA, Boxing, Functional Fitness – für jeden die richtige Herausforderung.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-12 mb-8 md:mb-16">
            <div>
              <div className="text-xl md:text-3xl font-black text-brand-primary">
                <AnimatedNumber end={8} suffix="+" duration={2000} />
              </div>
              <div className="text-[0.5rem] md:text-xs font-bold text-gray-500 tracking-widest uppercase mt-1">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-black text-brand-primary">
                <AnimatedNumber end={4} suffix="+" duration={2000} padStart={true} />
              </div>
              <div className="text-[0.5rem] md:text-xs font-bold text-gray-500 tracking-widest uppercase mt-1">Disziplinen</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-black text-brand-primary">
                ∞
              </div>
              <div className="text-[0.5rem] md:text-xs font-bold text-gray-500 tracking-widest uppercase mt-1">Begeisterung</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-6">

            <Link
              href="#contact"
              className="bg-brand-primary text-black px-4 py-1 md:px-8 md:py-3 text-xs md:text-base font-black transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(212,156,23,0.4)] text-center clip-path-polygon [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
            >
              STARTE DEINE REISE
            </Link>
            <Link
              href="#about"
              className="bg-transparent text-brand-primary border-2 border-brand-primary/30 px-4 py-1 md:px-8 md:py-3 text-xs md:text-base font-black transition-all hover:bg-brand-primary hover:text-black text-center"
            >
              ERFAHRE MEHR
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link href="#about">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
