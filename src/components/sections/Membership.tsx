"use client";

import { motion } from "framer-motion";

const membershipPrices = [
  { label: "Erwachsene", price: "39 EUR / Monat" },
  { label: "Jugendliche", price: "29 EUR / Monat" },
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand-primary"></div>
            <span className="text-brand-primary font-black text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase">
              Mitgliedschaft
            </span>
            <div className="h-px w-12 bg-brand-primary"></div>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-foreground uppercase tracking-tighter">
            KLAR, FAIR, <span className="text-brand-primary">MONATLICH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-brand-primary/10 p-6 sm:p-8"
          >
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-6 text-foreground">
              Mitgliedschaft bei uns
            </h3>
            <ul className="space-y-3">
              {[
                "Teil in einer echten Vereinsgemeinschaft und echtes Mitspracherecht",
                "Top Trainerteam mit langjähriger Erfahrung",
                "Zugang zu allen Trainingseinheiten und zum Open Gym",
                "Wettkampftraining wenn gewünscht",
                "Keine versteckten Kosten, kein Upselling, regelmäßige Seminare inklusive",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-foreground! font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {membershipPrices.map((plan) => (
              <div key={plan.label} className="border border-brand-primary/30 bg-background p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary mb-2">{plan.label}</p>
                <p className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">{plan.price}</p>
              </div>
            ))}

            <p className="text-xs sm:text-sm text-foreground! text-white/70 font-medium px-1">
              Zusätzlich fällt einmalig eine Aufnahmegebühr von 15 EUR an.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
