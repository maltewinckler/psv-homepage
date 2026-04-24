"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Users, Shield } from "lucide-react";
import { disciplines, type Discipline } from "@/content/disciplines";
import { trainers, type Trainer } from "@/content/trainers";
import { principles, type Principle } from "@/content/principles";

type TabType = "disciplines" | "team" | "principles";

const tabs = [
  { id: "disciplines", label: "Disziplinen", icon: Dumbbell },
  { id: "team", label: "Team", icon: Users },
  { id: "principles", label: "Prinzipien", icon: Shield },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabType>("disciplines");

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand-primary"></div>
            <span className="text-brand-primary font-black text-xs sm:text-sm tracking-[0.2em] uppercase">Über uns</span>
            <div className="h-px w-12 bg-brand-primary"></div>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-foreground mb-6 uppercase tracking-tighter">
            {activeTab === "disciplines" && (<>UNSERE <span className="text-brand-primary">DISZIPLINEN</span></>)}
            {activeTab === "team" && (<>UNSER <span className="text-brand-primary">TEAM</span></>)}
            {activeTab === "principles" && (<>UNSERE <span className="text-brand-primary">PRINZIPIEN</span></>)}
          </h2>

          <p className="text-foreground! text-white/80 text-sm sm:text-base font-medium leading-relaxed">
            {activeTab === "disciplines" &&
              "Von Einsteiger bis Fortgeschritten: Bei uns gibt es Trainingseinheiten in "
              + "verschiedenen Disziplinen für alle Erfahrungsstufen. "
              + "Du kannst an jedem Training teilnehmen. "
              + "Erwachsene, Jugendliche und Kinder trainieren allerdings getrennt."
            }
            {activeTab === "team" &&
              "Unsere Trainer*innen haben langjährige Erfahrung und einen Übungsleiterschein des Budoverbands. "
              + "Alle sind ehrenamtlich tätig und bringen viel Herz in die Trainings und das Vereinsleben ein."
            }
            {activeTab === "principles" &&
              "Ein Kampfsportverein ist anders als ein Fußballverein. Daher haben wir klare Spielregeln and die sich alle "
              + "halten müsssen - ob Mitglied oder Gast."
            }
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-10 sm:mb-20">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`
                  group flex items-center gap-1 sm:gap-3 px-2 py-3 sm:px-6 sm:py-3 font-black uppercase text-xs sm:text-sm tracking-widest transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-brand-primary text-black shadow-[0_0_20px_rgba(235,255,0,0.3)]"
                      : "bg-white/5 text-white/80 hover:text-white border border-transparent hover:border-brand-primary/30"
                  }
                `}
              >
                <tab.icon
                  size={18}
                  className={
                    activeTab === tab.id
                      ? "text-black w-4 h-4 sm:w-5 sm:h-5"
                      : "text-brand-primary w-4 h-4 sm:w-5 sm:h-5"
                  }
                />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="transition-all duration-500 min-h-[300px]">
          {activeTab === "disciplines" && <DisciplinesTab />}
          {activeTab === "team" && <TeamTab />}
          {activeTab === "principles" && <PrinciplesTab />}
        </div>
      </div>
    </section>
  );
}

function DisciplinesTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
      {(disciplines as Discipline[]).map((discipline) => (
        <div
          key={discipline.id}
          className="group relative bg-white/5 border border-brand-primary/10 overflow-hidden hover:border-brand-primary/50 transition-all duration-500"
          id={discipline.id}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={discipline.image}
              alt={discipline.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="p-4 sm:p-8">
            <div className="flex items-center gap-4 mb-2 sm:mb-4">
              <div className="bg-brand-primary/10 backdrop-blur-md p-2 border border-brand-primary/20 shrink-0">
                <discipline.icon className="text-brand-primary" size={20} />
              </div>
              <h3 className="text-sm sm:text-xl font-black text-foreground uppercase tracking-tighter">
                {discipline.title}
              </h3>
            </div>
            <p className="text-foreground! text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
              {discipline.description}
            </p>
            <button className="flex items-center gap-2 text-brand-primary font-black text-xs sm:text-sm uppercase tracking-wide hover:gap-4 transition-all">
              Mehr erfahren <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {(trainers as Trainer[]).map((trainer) => (
        <div
          key={trainer.id}
          className="group bg-white/5 border border-brand-primary/10 overflow-hidden hover:border-brand-primary/30 transition-all duration-500"
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={trainer.image}
              alt={trainer.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-70"></div>

            {/* Cert badge in top-right corner */}
            {trainer.certs && trainer.certs.length > 0 && (
              <div className="absolute top-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white/90 font-medium text-[10px] uppercase tracking-wide">
                    {trainer.certs[0]}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-base sm:text-lg font-black text-foreground uppercase tracking-tight mb-1">
              {trainer.name}
            </h3>
            <p className="text-brand-primary font-bold text-xs uppercase tracking-wide italic">
              {trainer.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PrinciplesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {(principles as Principle[]).map((principle, index) => (
        <div
          key={index}
          className="group bg-white/5 border border-brand-primary/10 p-6 sm:p-8 hover:border-brand-primary/30 transition-all duration-500"
        >
          <h3 className="text-sm sm:text-base font-black text-foreground uppercase tracking-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
            {principle.title}
          </h3>
          <p className="text-foreground! text-white/80 text-sm sm:text-base font-medium leading-relaxed">
            {principle.description}
          </p>
        </div>
      ))}
    </div>
  );
}
