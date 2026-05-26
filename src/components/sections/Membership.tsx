"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const membershipPrices = [
  { label: "Erwachsene", price: "35 EUR / Monat" },
  { label: "Jugendliche", price: "25 EUR / Monat" },
];

export default function Membership() {
  return (
    <section id="membership" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Sei dabei"
          title={
            <>
              MITGLIEDSCHAFT <span className="text-brand-primary">IM VEREIN</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-8 items-start">
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
                "Teil in einer echten Vereinsgemeinschaft mit echtem Mitspracherecht",
                "Top Trainerteam mit langjähriger Erfahrung",
                "Zugang zu allen Trainingseinheiten und zum Open Gym",
                "Keine versteckten Kosten und kein Upselling",
                "Regemäßige gemeinsame Aktivitäten"
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
                <p className="text-2xl sm:text-3xl font-black text-foreground tracking-tight whitespace-nowrap">{plan.price}</p>
              </div>
            ))}

            <p className="text-xs sm:text-sm text-foreground! text-white/80 font-medium px-1">
              Zusätzlich fällt einmalig eine Aufnahmegebühr von 25 EUR an.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
