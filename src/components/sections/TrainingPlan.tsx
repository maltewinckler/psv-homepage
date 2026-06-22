"use client";

import { motion } from "framer-motion";
import { weeklySchedule } from "@/content/weeklySchedule";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function TrainingPlan() {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Wochenplan"
          title={
            <>
              ÜBERGANGS-<span className="text-brand-primary">TRAININGSPLAN</span>
            </>
          }
        />

        <p className="text-foreground! text-white/80 text-sm sm:text-base font-medium leading-relaxed text-center max-w-3xl mx-auto -mt-8 mb-12">
          Hier findest du unseren Trainingplan in der Übergangsphase (gültig ab dem 07.07.2026). {/* Hier findest du alle regelmäßigen Einheiten auf einen Blick. Probetraining ist jederzeit möglich. */}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {weeklySchedule.map((daySchedule, index) => (
            <motion.div
              key={daySchedule.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-brand-primary/10 rounded-lg overflow-hidden"
            >
              <div className="bg-brand-primary/10 px-4 py-4 border-b border-brand-primary/10">
                <h3 className="text-sm font-black text-foreground uppercase tracking-tight">
                  {daySchedule.day}
                </h3>
              </div>
              <div className="divide-y divide-brand-primary/10">
                {daySchedule.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="px-4 py-4 hover:bg-white/5 transition-colors"
                  >
                    <p className="text-xs font-black text-brand-primary uppercase tracking-wide mb-1">
                      {session.time}
                    </p>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      {session.discipline}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
