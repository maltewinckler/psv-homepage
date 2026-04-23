"use client";

import { motion } from "framer-motion";
import { weeklySchedule } from "@/content/weeklySchedule";

export default function TrainingPlan() {
  return (
    <section id="schedule" className="py-24 bg-background relative overflow-hidden">
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
              Wochenplan
            </span>
            <div className="h-px w-12 bg-brand-primary"></div>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-foreground mb-6 uppercase tracking-tighter">
            UNSER <span className="text-brand-primary">TRAININGSPLAN</span>
          </h2>

          <p className="text-foreground! text-white/70 text-sm sm:text-base font-medium leading-relaxed">
            Hier findest du alle regelmaessigen Einheiten auf einen Blick. Probetraining ist jederzeit moeglich.
          </p>
        </motion.div>

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
              <div className="bg-brand-primary/10 px-4 py-3 border-b border-brand-primary/10">
                <h3 className="text-sm font-black text-foreground uppercase tracking-tight">
                  {daySchedule.day}
                </h3>
              </div>
              <div className="divide-y divide-brand-primary/10">
                {daySchedule.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1">
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
