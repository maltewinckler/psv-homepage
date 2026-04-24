"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@psvessen.de";
const WHATSAPP_PHONE = "+491234567890";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 space-y-4"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-12 bg-brand-primary"></div>
            <span className="text-brand-primary font-bold text-xs md:text-sm tracking-[0.2em] uppercase">Kontakt</span>
            <div className="h-0.5 w-12 bg-brand-primary"></div>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-foreground leading-none uppercase tracking-tighter">
            KOMM <span className="text-brand-primary">VORBEI!</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground! text-white/80 text-sm md:text-base">
            Jede*r kann bei uns bei jedem Training vorbeikommen. Eine kurze Nachricht mit E-Mail-Adresse oder Telefonnummer reicht völlig aus.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-4"
          >
            <div className="bg-white/5 py-2 px-3 sm:py-6 sm:px-6 border border-brand-primary/10 transition-all hover:border-brand-primary relative">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
                  <Image
                    src="/psv-icon.png"
                    alt="PSV Essen Sportzentrum"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-black text-foreground uppercase tracking-tight">PSV ESSEN</h4>
                  <p className="text-xs font-bold text-brand-primary tracking-widest uppercase">SPORTZENTRUM</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Seit 2018</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 py-2 px-3 sm:py-6 sm:px-6 border border-brand-primary/10 flex items-start gap-4 group transition-all hover:border-brand-primary">
              <div className="p-2 bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black text-brand-primary uppercase tracking-wide">Adresse</p>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  Schürmannstrasse 43A<br />
                  45136 Essen
                </p>
              </div>
            </div>

            <div className="bg-white/5 py-2 px-3 sm:py-6 sm:px-6 border border-brand-primary/10 flex items-start gap-4 group transition-all hover:border-brand-primary">
              <div className="p-2 bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black text-brand-primary uppercase tracking-wide">E-Mail</p>
                <p className="text-xs sm:text-sm text-foreground break-words">{CONTACT_EMAIL}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full lg:w-2/3 bg-white/5 p-4 md:p-8 border border-brand-primary/10 flex flex-col flex-grow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-6 w-1 bg-brand-primary"></div>
              <h4 className="text-sm sm:text-xl font-black text-foreground uppercase tracking-tight">SO ERREICHST DU UNS</h4>
            </div>

            <div className="space-y-4 text-sm md:text-base text-foreground! text-white/80 leading-relaxed font-medium">
              <p>
                Schick uns einfach eine kurze Nachricht mit deinem Namen (via E-Mail oder Telefon/WhatsApp) und
                bei welchem Training du teilnehmen möchtest. Du kannst zu jedem Training kommen.
              </p>
              <p>
                Zuschauer sind bei allen Erwachsenentrainings herzlich willkommen. Gastkämpfer*innen ebenfalls!
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Probetraining%20PSV%20Essen&body=Hallo%20Team%2C%0Aich%20moechte%20gerne%20an%20einem%20Probetraining%20teilnehmen.%0AName%3A%0AKontakt%20(E-Mail%20oder%20Telefon)%3A`}
                className="bg-brand-primary text-black font-black py-3 px-5 hover:bg-brand-primary/90 transition shadow-xl text-center uppercase tracking-widest text-xs sm:text-sm"
              >
                Nachricht per E-Mail
              </a>

              <div className="bg-white/5 border border-brand-primary/20 py-3 px-5 text-center text-xs sm:text-sm font-medium text-foreground">
                WhatsApp: <a href={`https://wa.me/${WHATSAPP_PHONE}`} target="_blank" rel="noreferrer" className="text-brand-primary hover:underline">+49 123 4567890</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
