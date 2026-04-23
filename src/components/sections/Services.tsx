"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Apple, Dumbbell, Heart, Trophy, User, Users } from "lucide-react";

type TabType = "disciplines" | "team";

const tabs = [
  { id: "disciplines", label: "Disziplinen", icon: Dumbbell },
  { id: "team", label: "Team", icon: Users },
];

const disciplines = [
  {
    id: "thaiboxing",
    title: "Thaiboxing",
    description:
      "Traditioneller Muay-Thai-Stil mit Technik, Kondition und Wettkampfvorbereitung fuer alle Altersgruppen.",
    image: "/service-competition.jpg",
    icon: Dumbbell,
  },
  {
    id: "mma",
    title: "MMA",
    description:
      "Mixed Martial Arts als Ganzkoerpertraining mit Fokus auf Kraft, Taktik und technische Vielfalt.",
    image: "/service-personal.jpg",
    icon: Heart,
  },
  {
    id: "boxing",
    title: "Boxing",
    description:
      "Klassisches Boxtraining mit sauberer Fussarbeit, Schlagtechnik und Verteidigung fuer den Ring und Alltag.",
    image: "/service-group.png",
    icon: Users,
  },
  {
    id: "functional",
    title: "Functional Fitness",
    description:
      "Athletiktraining mit freien Uebungen und Geraeten fuer Stabilitaet, Ausdauer und Beweglichkeit.",
    image: "/service-cardio.png",
    icon: User,
  },
  {
    id: "jugend",
    title: "Jugendtraining",
    description:
      "Altersgerechte Einheiten fuer Kinder und Jugendliche mit Fokus auf Disziplin, Sicherheit und Freude.",
    image: "/service-nutrition.png",
    icon: Apple,
  },
  {
    id: "erwachsene",
    title: "Erwachsenentraining",
    description:
      "Intensive Einheiten fuer Erwachsene, vom Einstieg bis zur Wettkampfvorbereitung, in starker Gruppe.",
    image: "/service-weight.jpg",
    icon: Trophy,
  },
];

const trainers = [
  {
    id: "max-mustermann",
    name: "Max Mustermann",
    role: "Headcoach Thaiboxing",
    experience: "15 Jahre",
    image: "/trainer-1.png",
    specialties: ["Muay Thai", "Wettkampf"],
    certs: ["Trainerschein", "Kampfsport"],
  },
  {
    id: "erika-musterfrau",
    name: "Erika Musterfrau",
    role: "Headcoach MMA & Boxing",
    experience: "12 Jahre",
    image: "/trainer-2.png",
    specialties: ["MMA", "Boxen"],
    certs: ["Trainerschein", "MMA"],
  },
  {
    id: "thomas-beispiel",
    name: "Thomas Beispiel",
    role: "Trainer Functional Fitness",
    experience: "10 Jahre",
    image: "/trainer-3.png",
    specialties: ["Functional", "Krafttraining"],
    certs: ["Fitness", "Physio"],
  },
  {
    id: "anna-mustermann",
    name: "Anna Mustermann",
    role: "Jugendtrainerin",
    experience: "8 Jahre",
    image: "/trainer-1.png",
    specialties: ["Kinder", "Jugendliche"],
    certs: ["Paedagogik", "Sport"],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<TabType>("disciplines");

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
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
            <span className="text-brand-primary font-black text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase">
              Ueber uns
            </span>
            <div className="h-px w-12 bg-brand-primary"></div>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-foreground mb-6 uppercase tracking-tighter">
            {activeTab === "disciplines" && (
              <>
                UNSERE <span className="text-brand-primary">DISZIPLINEN</span>
              </>
            )}
            {activeTab === "team" && (
              <>
                UNSER <span className="text-brand-primary">TEAM</span>
              </>
            )}
          </h2>

          <p className="text-foreground! text-white/70 text-sm sm:text-base font-medium leading-relaxed">
            {activeTab === "disciplines" &&
              "Von Einsteiger bis Fortgeschritten: Wir bieten strukturierte Einheiten in mehreren Disziplinen fuer alle Altersgruppen."}
            {activeTab === "team" &&
              "Unsere ehrenamtlichen Trainer bringen Erfahrung, Herz und klare Struktur in jede Trainingseinheit."}
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-10 sm:mb-20">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`
                  group flex items-center gap-1 sm:gap-3 px-2 py-2 sm:px-6 sm:py-2 font-black uppercase text-[0.6rem] sm:text-sm tracking-widest transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-brand-primary text-black shadow-[0_0_20px_rgba(235,255,0,0.3)]"
                      : "bg-white/5 text-white/60 hover:text-white border border-transparent hover:border-brand-primary/30"
                  }
                `}
              >
                <tab.icon
                  size={18}
                  className={
                    activeTab === tab.id
                      ? "text-black w-3 h-3 sm:w-6 sm:h-6"
                      : "text-brand-primary w-3 h-3 sm:w-6 sm:h-6"
                  }
                />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="transition-all duration-500 min-h-150">
          {activeTab === "disciplines" && <DisciplinesTab />}
          {activeTab === "team" && <TeamTab />}
        </div>
      </div>
    </section>
  );
}

function DisciplinesTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
      {disciplines.map((discipline) => (
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
            <p className="text-foreground! text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
              {discipline.description}
            </p>
            <button className="flex items-center gap-2 text-brand-primary font-black text-[0.6rem] sm:text-xs uppercase tracking-widest hover:gap-4 transition-all">
              Mehr erfahren <ArrowRight size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {trainers.map((trainer) => (
        <div
          key={trainer.id}
          className="group bg-white/5 border border-brand-primary/10 overflow-hidden hover:border-brand-primary/30 transition-all duration-500"
        >
          <div className="relative h-60 sm:h-80 overflow-hidden">
            <Image
              src={trainer.image}
              alt={trainer.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-70"></div>

            <div className="absolute top-6 right-6">
              <div className="bg-gray-800 backdrop-blur-md px-2 py-1 border border-brand-primary/40 rounded-3xl">
                <span className="text-brand-primary font-black text-[10px] uppercase tracking-widest">
                  {trainer.experience}
                </span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-base sm:text-xl font-black text-foreground uppercase tracking-tight mb-1">
              {trainer.name}
            </h3>
            <p className="text-brand-primary font-bold text-[10px] uppercase tracking-widest mb-4 italic">
              {trainer.role}
            </p>

            <p className="text-foreground! text-white/60 text-xs font-medium mb-6">
              {trainer.specialties.join(" • ")}
            </p>

            <div className="flex flex-wrap gap-2">
              {trainer.certs.map((cert) => (
                <span
                  key={cert}
                  className="bg-white/5 px-3 py-1 text-[10px] font-bold text-foreground border border-brand-primary/10 uppercase tracking-tighter"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
