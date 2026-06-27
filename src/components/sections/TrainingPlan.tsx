"use client";

import { motion } from "framer-motion";
import { weeklySchedule } from "@/content/TrainingPlan";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facilityMap: Record<string, { short: string; maps: string }> = {
  "frida-levy-gesamtschule": {
    short: "Frida",
    maps: "https://maps.app.goo.gl/Q8cjiFHEUBn946PS8",
  },
  "burggymnasium": {
    short: "Burg",
    maps: "https://maps.app.goo.gl/nHMQB1hbuPV6ymAz9",
  },
  "sporthalle-steeler-strasse": {
    short: "Steele",
    maps: "https://maps.app.goo.gl/oYKAiekVahjT35pJ7",
  },
};

const facilitiesInClarification: string[] = ["burggymnasium", "sporthalle-steeler-strasse"];

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
              className="bg-white/5 border border-brand-primary/10 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="bg-brand-primary/10 px-4 py-4 border-b border-brand-primary/10">
                <h3 className="text-sm font-black text-foreground uppercase tracking-tight">
                  {daySchedule.day}
                  {daySchedule.facilityId && (
                    <a
                      href={facilityMap[daySchedule.facilityId].maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-primary cursor-pointer hover:text-brand-primary/80"
                    >
                      ({facilityMap[daySchedule.facilityId].short})
                    </a>
                  )}
                </h3>
              </div>
              <div className="divide-y divide-brand-primary/10 flex-1">
                <div className="px-4">
                  {daySchedule.sessions.map((session, sessionIndex) => (
                    <div
                      key={sessionIndex}
                      className="py-4 hover:bg-white/5 transition-colors"
                    >
                      <p className="text-xs font-black text-brand-primary uppercase tracking-wide mb-1">
                        {session.time}
                      </p>
                      <p className="text-sm font-bold text-foreground leading-tight">
                        {session.discipline}
                      </p>
                      {sessionIndex < daySchedule.sessions.length - 1 && (
                        <div className="divide-y divide-brand-primary/10 -my-px" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {daySchedule.facilityId && facilitiesInClarification.includes(daySchedule.facilityId) && (
                <p className="text-xs text-brand-primary/80 px-4 py-3">
                  Details noch in Klärung
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Facility Footnote */}
        <div id="facilities" className="mt-12 pt-8 border-t border-brand-primary/10 scroll-mt-20">
          <p className="text-xs text-white/50">
            Frida-Levy Gesamtschule, Arnswaldter Str. 61, 45133 Essen ·{" "}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-primary/80 transition-colors">Google Maps</a>
            <br />
            Burggymnasium, Kärgerstr. 14-16, 45127 Essen ·{" "}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-primary/80 transition-colors">Google Maps</a>
            <br />
            Sporthalle Steeler Str., Steeler Str. 85, 45276 Essen ·{" "}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-primary/60 hover:text-brand-primary/80 transition-colors">Google Maps</a>
          </p>
        </div>
      </div>
    </section>
  );
}
